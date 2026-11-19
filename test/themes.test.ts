// @vitest-environment jsdom
import { describe, expect, it, beforeEach, vi } from 'vitest';

vi.mock('antd', () => ({
  theme: {
    darkAlgorithm: 'mockDarkAlgorithm',
    defaultAlgorithm: 'mockDefaultAlgorithm',
  },
}));

import {
  applyThemeToDocument,
  DEFAULT_THEME_MODE,
  DEFAULT_THEME_PALETTE,
  generateTokensCss,
  getHeadBootstrapScript,
  getThemeTokens,
  hexToRgbTriplet,
  LEMON_THEMES,
  loadThemeState,
  saveThemeState,
} from '../src';
import { lemonTailwindPreset } from '../src/tailwind/preset';
import { createAntdThemeConfig } from '../src/antd/createAntdTheme';

describe('@lemon/themes', () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.className = '';
    document.documentElement.removeAttribute('data-theme');
    document.documentElement.removeAttribute('data-theme-mode');
    document.documentElement.style.colorScheme = '';
  });

  it('uses Lemon Atom Theme as the default palette', () => {
    expect(DEFAULT_THEME_PALETTE).toBe('atom');
    expect(DEFAULT_THEME_MODE).toBe('dark');
    expect(LEMON_THEMES.atom.name).toBe('Lemon Atom Theme');
    expect(LEMON_THEMES.slate.name).toBe('Lemon Slate Theme');
  });

  it('converts hex colors to space-separated RGB triplets', () => {
    expect(hexToRgbTriplet('#1b1d23')).toBe('27 29 35');
    expect(hexToRgbTriplet('#fff')).toBe('255 255 255');
    expect(hexToRgbTriplet('#e5c07b')).toBe('229 192 123');
    expect(() => hexToRgbTriplet('not-a-color')).toThrow();
  });

  it('generates valid CSS containing both Atom and Slate light/dark blocks', () => {
    const css = generateTokensCss();
    expect(css).toContain(':root {');
    expect(css).toContain(':root.dark {');
    expect(css).toContain(':root[data-theme="atom"]');
    expect(css).toContain(':root[data-theme="atom"].dark');
    expect(css).toContain(':root[data-theme="slate"]');
    expect(css).toContain(':root[data-theme="slate"].dark');
    expect(css).toContain('--lemon-platform-rgb: 27 29 35;');
    expect(css).toContain('--lemon-platform-rgb: 14 22 33;');
    expect(css).toContain('--platform-bg: #1b1d23;');
    expect(css).toContain('--feed-bg: 14 22 33;');
  });

  it('persists, migrates legacy mode, and applies theme to documentElement', () => {
    window.localStorage.setItem('lemon_theme_mode', 'light');
    const migrated = loadThemeState();
    expect(migrated).toEqual({ palette: 'atom', mode: 'light' });

    saveThemeState({ palette: 'slate', mode: 'dark' });
    expect(loadThemeState()).toEqual({ palette: 'slate', mode: 'dark' });

    applyThemeToDocument({ palette: 'slate', mode: 'dark' });
    expect(document.documentElement.getAttribute('data-theme')).toBe('slate');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(document.documentElement.style.colorScheme).toBe('dark');

    applyThemeToDocument({ palette: 'atom', mode: 'light' });
    expect(document.documentElement.getAttribute('data-theme')).toBe('atom');
    expect(document.documentElement.classList.contains('light')).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(document.documentElement.style.colorScheme).toBe('light');
  });

  it('builds valid head bootstrap script, Tailwind preset, and AntD theme configs', () => {
    const script = getHeadBootstrapScript({ defaultPalette: 'atom', defaultMode: 'dark' });
    expect(script).toContain('lemon_theme_state');
    expect(script).toContain('data-theme');

    expect(lemonTailwindPreset.darkMode).toBe('class');
    expect(lemonTailwindPreset.theme?.extend?.colors).toHaveProperty('platform');
    expect(lemonTailwindPreset.theme?.extend?.colors).toHaveProperty('tile');
    expect(lemonTailwindPreset.theme?.extend?.colors).toHaveProperty('primary');

    const atomDark = createAntdThemeConfig({ palette: 'atom', mode: 'dark' });
    const slateLight = createAntdThemeConfig({ palette: 'slate', mode: 'light' });
    expect(atomDark.token?.colorPrimary).toBe(getThemeTokens('atom', 'dark').brand.primary);
    expect(slateLight.token?.colorPrimary).toBe(getThemeTokens('slate', 'light').brand.primary);
  });
});

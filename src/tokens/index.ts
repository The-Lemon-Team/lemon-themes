import { lemonAtomTheme } from './atom';
import { lemonSlateTheme } from './slate';
import type { ThemeMode, ThemePaletteDefinition, ThemePaletteId, ThemeVariantTokens } from './types';

export type {
  ThemeMode,
  ThemePaletteDefinition,
  ThemePaletteId,
  ThemeState,
  ThemeVariantTokens,
} from './types';
export { hexToRgbTriplet } from './colorUtils';
export { lemonAtomTheme } from './atom';
export { lemonSlateTheme } from './slate';

export const DEFAULT_THEME_PALETTE: ThemePaletteId = 'atom';
export const DEFAULT_THEME_MODE: ThemeMode = 'dark';

export const LEMON_THEMES: Record<ThemePaletteId, ThemePaletteDefinition> = {
  atom: lemonAtomTheme,
  slate: lemonSlateTheme,
};

export const LEMON_THEME_LIST: ThemePaletteDefinition[] = [lemonAtomTheme, lemonSlateTheme];

export function getThemeDefinition(palette: ThemePaletteId = DEFAULT_THEME_PALETTE): ThemePaletteDefinition {
  return LEMON_THEMES[palette] ?? lemonAtomTheme;
}

export function getThemeTokens(
  palette: ThemePaletteId = DEFAULT_THEME_PALETTE,
  mode: ThemeMode = DEFAULT_THEME_MODE
): ThemeVariantTokens {
  return getThemeDefinition(palette)[mode];
}

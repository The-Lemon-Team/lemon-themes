import { hexToRgbTriplet } from '../tokens/colorUtils';
import { lemonAtomTheme } from '../tokens/atom';
import { lemonSlateTheme } from '../tokens/slate';
import type { ThemeMode, ThemePaletteDefinition, ThemeVariantTokens } from '../tokens/types';

function formatVariantVars(tokens: ThemeVariantTokens, mode: ThemeMode): string[] {
  const lines: string[] = [
    `  color-scheme: ${mode};`,
    '',
    '  /* Canonical Lemon Surface RGB triplets (usable with rgb(var(--...) / <alpha-value>)) */',
    `  --lemon-platform-rgb: ${hexToRgbTriplet(tokens.surfaces.platform)};`,
    `  --lemon-canvas-rgb: ${hexToRgbTriplet(tokens.surfaces.canvas)};`,
    `  --lemon-panel-rgb: ${hexToRgbTriplet(tokens.surfaces.panel)};`,
    `  --lemon-tile-rgb: ${hexToRgbTriplet(tokens.surfaces.tile)};`,
    `  --lemon-tile-subtle-rgb: ${hexToRgbTriplet(tokens.surfaces.tileSubtle)};`,
    `  --lemon-tile-muted-rgb: ${hexToRgbTriplet(tokens.surfaces.tileMuted)};`,
    `  --lemon-control-rgb: ${hexToRgbTriplet(tokens.surfaces.control)};`,
    `  --lemon-control-hover-rgb: ${hexToRgbTriplet(tokens.surfaces.controlHover)};`,
    '',
    '  /* Canonical Text RGB triplets */',
    `  --lemon-text-main-rgb: ${hexToRgbTriplet(tokens.text.main)};`,
    `  --lemon-text-secondary-rgb: ${hexToRgbTriplet(tokens.text.secondary)};`,
    `  --lemon-text-muted-rgb: ${hexToRgbTriplet(tokens.text.muted)};`,
    `  --lemon-text-dim-rgb: ${hexToRgbTriplet(tokens.text.dim)};`,
    '',
    '  /* Canonical Brand & Status RGB triplets */',
    `  --lemon-primary-rgb: ${hexToRgbTriplet(tokens.brand.primary)};`,
    `  --lemon-primary-hover-rgb: ${hexToRgbTriplet(tokens.brand.primaryHover)};`,
    `  --lemon-primary-active-rgb: ${hexToRgbTriplet(tokens.brand.primaryActive)};`,
    `  --lemon-on-primary-rgb: ${hexToRgbTriplet(tokens.brand.onPrimary)};`,
    `  --lemon-link-rgb: ${hexToRgbTriplet(tokens.brand.link)};`,
    `  --lemon-success-rgb: ${hexToRgbTriplet(tokens.status.success)};`,
    `  --lemon-warning-rgb: ${hexToRgbTriplet(tokens.status.warning)};`,
    `  --lemon-error-rgb: ${hexToRgbTriplet(tokens.status.error)};`,
    `  --lemon-info-rgb: ${hexToRgbTriplet(tokens.status.info)};`,
    '',
    '  /* Direct CSS values (surfaces, borders, shadows, scrollbars) */',
    `  --lemon-primary: ${tokens.brand.primary};`,
    `  --lemon-primary-hover: ${tokens.brand.primaryHover};`,
    `  --lemon-primary-bg: ${tokens.brand.primaryBg};`,
    `  --lemon-primary-border: ${tokens.brand.primaryBorder};`,
    `  --lemon-on-primary: ${tokens.brand.onPrimary};`,
    `  --lemon-panel-border: ${tokens.borders.panel};`,
    `  --lemon-tile-border: ${tokens.borders.tile};`,
    `  --lemon-tile-border-hover: ${tokens.borders.tileHover};`,
    `  --lemon-control-border: ${tokens.borders.control};`,
    `  --lemon-control-border-hover: ${tokens.borders.controlHover};`,
    `  --lemon-panel-shadow: ${tokens.shadows.panel};`,
    `  --lemon-tile-shadow: ${tokens.shadows.tile};`,
    `  --lemon-tile-shadow-hover: ${tokens.shadows.tileHover};`,
    `  --lemon-scrollbar-thumb: ${tokens.scrollbar.thumb};`,
    `  --lemon-scrollbar-thumb-hover: ${tokens.scrollbar.thumbHover};`,
    '',
    '  /* Backward-compatible aliases (admin-cms & feed-app) */',
    `  --platform-bg: ${tokens.surfaces.platform};`,
    `  --canvas-bg: ${tokens.surfaces.canvas};`,
    `  --panel-bg: ${tokens.surfaces.panel};`,
    `  --panel-border: ${tokens.borders.panel};`,
    `  --panel-shadow: ${tokens.shadows.panel};`,
    `  --tile-bg: ${tokens.surfaces.tile};`,
    `  --tile-bg-subtle: ${tokens.surfaces.tileSubtle};`,
    `  --tile-bg-muted: ${tokens.surfaces.tileMuted};`,
    `  --tile-border: ${tokens.borders.tile};`,
    `  --tile-border-hover: ${tokens.borders.tileHover};`,
    `  --tile-shadow: ${tokens.shadows.tile};`,
    `  --tile-shadow-hover: ${tokens.shadows.tileHover};`,
    `  --control-bg: ${tokens.surfaces.control};`,
    `  --control-bg-hover: ${tokens.surfaces.controlHover};`,
    `  --control-border: ${tokens.borders.control};`,
    `  --control-border-hover: ${tokens.borders.controlHover};`,
    `  --control-text: ${tokens.text.main};`,
    `  --control-placeholder: ${tokens.text.muted};`,
    `  --text-main: ${tokens.text.main};`,
    `  --text-secondary: ${tokens.text.secondary};`,
    `  --text-muted: ${tokens.text.muted};`,
    `  --text-dim: ${tokens.text.dim};`,
    `  --primary: ${tokens.brand.primary};`,
    `  --primary-rgb: ${hexToRgbTriplet(tokens.brand.primary)};`,
    `  --primary-hover: ${tokens.brand.primaryHover};`,
    `  --primary-bg: ${tokens.brand.primaryBg};`,
    `  --primary-border: ${tokens.brand.primaryBorder};`,
    `  --on-primary: ${hexToRgbTriplet(tokens.brand.onPrimary)};`,
    `  --scrollbar-thumb: ${tokens.scrollbar.thumb};`,
    `  --scrollbar-thumb-hover: ${tokens.scrollbar.thumbHover};`,
    `  --feed-bg: ${hexToRgbTriplet(tokens.surfaces.platform)};`,
    `  --surface-container: ${hexToRgbTriplet(tokens.surfaces.tile)};`,
    `  --surface-container-highest: ${hexToRgbTriplet(tokens.surfaces.tileSubtle)};`,
    `  --surface-variant: ${hexToRgbTriplet(tokens.surfaces.tileMuted)};`,
    `  --on-surface: ${hexToRgbTriplet(tokens.text.main)};`,
    `  --on-surface-variant: ${hexToRgbTriplet(tokens.text.secondary)};`,
    `  --outline: ${hexToRgbTriplet(tokens.text.muted)};`,
    `  --outline-variant: ${hexToRgbTriplet(tokens.text.dim)};`,
  ];

  return lines;
}

function formatBlock(selector: string, tokens: ThemeVariantTokens, mode: ThemeMode): string {
  return `${selector} {\n${formatVariantVars(tokens, mode).join('\n')}\n}`;
}

function buildPaletteBlocks(palette: ThemePaletteDefinition): string[] {
  return [
    `/* ${palette.name} — Light */`,
    formatBlock(`:root[data-theme="${palette.id}"], [data-theme="${palette.id}-light"]`, palette.light, 'light'),
    '',
    `/* ${palette.name} — Dark */`,
    formatBlock(
      `:root[data-theme="${palette.id}"].dark, [data-theme="${palette.id}-dark"]`,
      palette.dark,
      'dark'
    ),
  ];
}

/**
 * Generates the full tokens.css stylesheet with Lemon Atom Theme as the root default.
 */
export function generateTokensCss(): string {
  const sections: string[] = [
    '/* Auto-generated from @lemon/themes TypeScript palette definitions. Do not edit manually. */',
    '',
    '/* Default theme: Lemon Atom Theme (Light / Dark) */',
    formatBlock(':root', lemonAtomTheme.light, 'light'),
    '',
    formatBlock(':root.dark', lemonAtomTheme.dark, 'dark'),
    '',
    ...buildPaletteBlocks(lemonAtomTheme),
    '',
    ...buildPaletteBlocks(lemonSlateTheme),
    '',
  ];

  return sections.join('\n');
}

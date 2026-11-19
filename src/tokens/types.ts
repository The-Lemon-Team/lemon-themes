export type ThemePaletteId = 'atom' | 'slate';

export type ThemeMode = 'light' | 'dark';

export interface ThemeVariantTokens {
  /** Surface colors (hex) */
  surfaces: {
    platform: string;
    canvas: string;
    panel: string;
    tile: string;
    tileSubtle: string;
    tileMuted: string;
    control: string;
    controlHover: string;
  };
  /** Text colors (hex) */
  text: {
    main: string;
    secondary: string;
    muted: string;
    dim: string;
  };
  /** Brand & accent colors (hex / rgba) */
  brand: {
    primary: string;
    primaryHover: string;
    primaryActive: string;
    onPrimary: string;
    primaryBg: string;
    primaryBorder: string;
    link: string;
  };
  /** Functional status colors (hex) */
  status: {
    success: string;
    warning: string;
    error: string;
    info: string;
  };
  /** Structural borders (rgba or hex) */
  borders: {
    panel: string;
    tile: string;
    tileHover: string;
    control: string;
    controlHover: string;
  };
  /** Elevation shadows */
  shadows: {
    panel: string;
    tile: string;
    tileHover: string;
  };
  /** Scrollbar thumb colors */
  scrollbar: {
    thumb: string;
    thumbHover: string;
  };
  /** Browser meta theme-color */
  metaThemeColor: string;
}

export interface ThemePaletteDefinition {
  id: ThemePaletteId;
  name: string;
  description: string;
  light: ThemeVariantTokens;
  dark: ThemeVariantTokens;
}

export interface ThemeState {
  palette: ThemePaletteId;
  mode: ThemeMode;
}

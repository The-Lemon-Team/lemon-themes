import { theme, type ThemeConfig } from 'antd';
import {
  DEFAULT_THEME_MODE,
  DEFAULT_THEME_PALETTE,
  getThemeTokens,
  type ThemeMode,
  type ThemePaletteId,
} from '../tokens';

export interface CreateAntdThemeOptions {
  palette?: ThemePaletteId;
  mode?: ThemeMode;
  compactFontSize?: number;
}

/**
 * Builds an Ant Design v5 `ThemeConfig` synchronized with `@lemon/themes` palettes.
 */
export function createAntdThemeConfig(options: CreateAntdThemeOptions = {}): ThemeConfig {
  const {
    palette = DEFAULT_THEME_PALETTE,
    mode = DEFAULT_THEME_MODE,
    compactFontSize = 12,
  } = options;

  const t = getThemeTokens(palette, mode);
  const isDark = mode === 'dark';

  return {
    algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      colorPrimary: t.brand.primary,
      colorPrimaryHover: t.brand.primaryHover,
      colorPrimaryActive: t.brand.primaryActive,
      colorPrimaryBg: t.brand.primaryBg,

      colorBgBase: isDark ? t.surfaces.platform : t.surfaces.tile,
      colorBgContainer: t.surfaces.tile,
      colorBgElevated: t.surfaces.panel,
      colorBgLayout: t.surfaces.canvas,
      colorBgSpotlight: isDark ? t.surfaces.tileSubtle : '#1e293b',

      colorText: t.text.main,
      colorTextSecondary: t.text.secondary,
      colorTextTertiary: t.text.muted,
      colorTextQuaternary: t.text.dim,

      colorBorder: t.borders.tile,
      colorBorderSecondary: t.borders.panel,

      colorSuccess: t.status.success,
      colorWarning: t.status.warning,
      colorError: t.status.error,
      colorInfo: t.status.info,

      borderRadius: 6,
      borderRadiusLG: 10,
      borderRadiusSM: 4,
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontFamilyCode: 'JetBrains Mono, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
      fontSize: compactFontSize,
    },
    components: {
      Button: {
        borderRadius: 6,
        fontWeight: 500,
        controlHeight: 28,
        defaultBg: t.surfaces.tile,
        defaultBorderColor: t.borders.control,
        defaultColor: t.text.main,
      },
      Input: {
        borderRadius: 6,
        controlHeight: 28,
        colorBgContainer: t.surfaces.control,
        colorBorder: t.borders.control,
        activeBorderColor: t.brand.primary,
        hoverBorderColor: t.brand.primaryHover,
        colorText: t.text.main,
        colorTextPlaceholder: t.text.muted,
      },
      Select: {
        borderRadius: 6,
        controlHeight: 28,
        colorBgContainer: t.surfaces.control,
        colorBorder: t.borders.control,
      },
      DatePicker: {
        borderRadius: 6,
        controlHeight: 28,
        colorBgContainer: t.surfaces.control,
        colorBorder: t.borders.control,
      },
      Table: {
        colorBgContainer: 'transparent',
        headerBg: t.surfaces.tileSubtle,
        headerColor: t.text.secondary,
        rowHoverBg: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(15, 23, 42, 0.03)',
        borderColor: t.borders.tile,
        borderRadius: 8,
        fontSize: 11,
      },
      Modal: {
        contentBg: t.surfaces.panel,
        headerBg: t.surfaces.panel,
        borderRadiusLG: 12,
      },
      Card: {
        colorBgContainer: t.surfaces.tile,
        colorBorderSecondary: t.borders.tile,
        borderRadiusLG: 8,
      },
      Tag: {
        borderRadiusSM: 4,
      },
      Tree: {
        colorBgContainer: 'transparent',
        nodeHoverBg: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(15, 23, 42, 0.04)',
        nodeSelectedBg: t.brand.primaryBg,
      },
    },
  };
}

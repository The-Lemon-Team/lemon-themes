import type { ThemePaletteDefinition } from './types';

/**
 * Lemon Slate Theme — cool deep-blue slate & airy white palette inspired by Telegram.
 * Origin: feed-app.
 */
export const lemonSlateTheme: ThemePaletteDefinition = {
  id: 'slate',
  name: 'Lemon Slate Theme',
  description:
    'Cool Telegram-inspired slate palette with deep midnight-blue dark mode and clean airy white light mode.',
  light: {
    surfaces: {
      platform: '#f8fafc',
      canvas: '#f8fafc',
      panel: '#ffffff',
      tile: '#ffffff',
      tileSubtle: '#f1f5f9',
      tileMuted: '#e2e8f0',
      control: '#ffffff',
      controlHover: '#f1f5f9',
    },
    text: {
      main: '#0f172a',
      secondary: '#475569',
      muted: '#64748b',
      dim: '#94a3b8',
    },
    brand: {
      primary: '#2481cc',
      primaryHover: '#1e6cb0',
      primaryActive: '#1a5d99',
      onPrimary: '#ffffff',
      primaryBg: 'rgba(36, 129, 204, 0.10)',
      primaryBorder: 'rgba(36, 129, 204, 0.30)',
      link: '#2481cc',
    },
    status: {
      success: '#16a34a',
      warning: '#d97706',
      error: '#dc2626',
      info: '#2481cc',
    },
    borders: {
      panel: 'rgba(226, 232, 240, 0.85)',
      tile: 'rgba(226, 232, 240, 0.85)',
      tileHover: 'rgba(148, 163, 184, 0.65)',
      control: 'rgba(226, 232, 240, 0.95)',
      controlHover: 'rgba(148, 163, 184, 0.75)',
    },
    shadows: {
      panel: '0 2px 12px rgba(0, 0, 0, 0.04)',
      tile: '0 2px 12px rgba(0, 0, 0, 0.04)',
      tileHover: '0 8px 30px rgba(0, 0, 0, 0.08)',
    },
    scrollbar: {
      thumb: 'rgba(140, 160, 180, 0.25)',
      thumbHover: 'rgba(140, 160, 180, 0.45)',
    },
    metaThemeColor: '#ffffff',
  },
  dark: {
    surfaces: {
      platform: '#0e1621',
      canvas: '#0e1621',
      panel: '#18222d',
      tile: '#18222d',
      tileSubtle: '#1f2b38',
      tileMuted: '#273544',
      control: '#121923',
      controlHover: '#1f2b38',
    },
    text: {
      main: '#e2e8f0',
      secondary: '#94a3b8',
      muted: '#8292a2',
      dim: '#475569',
    },
    brand: {
      primary: '#2481cc',
      primaryHover: '#3b93db',
      primaryActive: '#1e6cb0',
      onPrimary: '#ffffff',
      primaryBg: 'rgba(36, 129, 204, 0.16)',
      primaryBorder: 'rgba(36, 129, 204, 0.35)',
      link: '#64b5f6',
    },
    status: {
      success: '#34d399',
      warning: '#fbbf24',
      error: '#f87171',
      info: '#64b5f6',
    },
    borders: {
      panel: 'rgba(255, 255, 255, 0.08)',
      tile: 'rgba(255, 255, 255, 0.08)',
      tileHover: 'rgba(255, 255, 255, 0.16)',
      control: 'rgba(255, 255, 255, 0.10)',
      controlHover: 'rgba(255, 255, 255, 0.20)',
    },
    shadows: {
      panel: '0 8px 30px rgba(0, 0, 0, 0.28)',
      tile: '0 2px 12px rgba(0, 0, 0, 0.18)',
      tileHover: '0 8px 30px rgba(0, 0, 0, 0.32)',
    },
    scrollbar: {
      thumb: 'rgba(140, 160, 180, 0.25)',
      thumbHover: 'rgba(140, 160, 180, 0.45)',
    },
    metaThemeColor: '#0e1621',
  },
};

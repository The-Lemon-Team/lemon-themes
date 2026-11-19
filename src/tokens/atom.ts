import type { ThemePaletteDefinition } from './types';

/**
 * Lemon Atom Theme — inspired by Atom One Dark & One Light with an
 * architectural platform-and-tiles surface hierarchy and warm Lemon Gold accents.
 * Origin: admin-cms.
 */
export const lemonAtomTheme: ThemePaletteDefinition = {
  id: 'atom',
  name: 'Lemon Atom Theme',
  description:
    'Atom One inspired palette with warm lemon-gold accents, low-glare graphite dark mode, and crisp architectural platform light mode.',
  light: {
    surfaces: {
      platform: '#e2e8f0',
      canvas: '#edf1f6',
      panel: '#ffffff',
      tile: '#ffffff',
      tileSubtle: '#f1f5f9',
      tileMuted: '#e2e8f0',
      control: '#ffffff',
      controlHover: '#f8fafc',
    },
    text: {
      main: '#383a42',
      secondary: '#5c6370',
      muted: '#7c8492',
      dim: '#9da3af',
    },
    brand: {
      primary: '#707600',
      primaryHover: '#595d00',
      primaryActive: '#595d00',
      onPrimary: '#ffffff',
      primaryBg: 'rgba(112, 118, 0, 0.08)',
      primaryBorder: 'rgba(112, 118, 0, 0.25)',
      link: '#707600',
    },
    status: {
      success: '#16a34a',
      warning: '#d97706',
      error: '#dc2626',
      info: '#0284c7',
    },
    borders: {
      panel: 'rgba(15, 23, 42, 0.14)',
      tile: 'rgba(15, 23, 42, 0.18)',
      tileHover: 'rgba(15, 23, 42, 0.32)',
      control: 'rgba(15, 23, 42, 0.18)',
      controlHover: 'rgba(15, 23, 42, 0.35)',
    },
    shadows: {
      panel: '0 4px 16px -2px rgba(15, 23, 42, 0.08), 0 1px 3px 0 rgba(15, 23, 42, 0.04)',
      tile: '0 1px 3px 0 rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.05)',
      tileHover: '0 4px 12px -2px rgba(15, 23, 42, 0.14), 0 2px 4px -1px rgba(15, 23, 42, 0.06)',
    },
    scrollbar: {
      thumb: 'rgba(15, 23, 42, 0.16)',
      thumbHover: 'rgba(15, 23, 42, 0.32)',
    },
    metaThemeColor: '#ffffff',
  },
  dark: {
    surfaces: {
      platform: '#1b1d23',
      canvas: '#21252b',
      panel: '#242830',
      tile: '#282c34',
      tileSubtle: '#242830',
      tileMuted: '#1e2227',
      control: '#1e2227',
      controlHover: '#252931',
    },
    text: {
      main: '#9da5b4',
      secondary: '#7e8796',
      muted: '#5c6370',
      dim: '#444b58',
    },
    brand: {
      primary: '#e5c07b',
      primaryHover: '#f0d38d',
      primaryActive: '#c99a45',
      onPrimary: '#1e2227',
      primaryBg: 'rgba(229, 192, 123, 0.12)',
      primaryBorder: 'rgba(229, 192, 123, 0.25)',
      link: '#e5c07b',
    },
    status: {
      success: '#98c379',
      warning: '#e5c07b',
      error: '#e06c75',
      info: '#61afef',
    },
    borders: {
      panel: 'rgba(255, 255, 255, 0.05)',
      tile: 'rgba(255, 255, 255, 0.06)',
      tileHover: 'rgba(255, 255, 255, 0.12)',
      control: 'rgba(255, 255, 255, 0.08)',
      controlHover: 'rgba(255, 255, 255, 0.16)',
    },
    shadows: {
      panel: '0 8px 24px -4px rgba(0, 0, 0, 0.35)',
      tile: '0 2px 8px rgba(0, 0, 0, 0.22), 0 1px 3px rgba(0, 0, 0, 0.15)',
      tileHover: '0 4px 14px -2px rgba(0, 0, 0, 0.28), 0 2px 4px rgba(0, 0, 0, 0.15)',
    },
    scrollbar: {
      thumb: 'rgba(255, 255, 255, 0.10)',
      thumbHover: 'rgba(255, 255, 255, 0.20)',
    },
    metaThemeColor: '#1b1d23',
  },
};

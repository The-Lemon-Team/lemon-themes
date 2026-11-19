import type { Config } from 'tailwindcss';

const rgb = (varName: string) => `rgb(var(${varName}) / <alpha-value>)`;

/**
 * Shared Tailwind CSS preset for Lemon Atom Theme & Lemon Slate Theme.
 * Supports Tailwind opacity modifiers (e.g. `bg-tile/80`, `text-primary/90`)
 * across all semantic surface, text, and accent tokens.
 */
export const lemonTailwindPreset: Partial<Config> = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Canonical Platform / Architectural Surface hierarchy
        platform: rgb('--lemon-platform-rgb'),
        canvas: rgb('--lemon-canvas-rgb'),
        panel: rgb('--lemon-panel-rgb'),
        tile: rgb('--lemon-tile-rgb'),
        'tile-subtle': rgb('--lemon-tile-subtle-rgb'),
        'tile-muted': rgb('--lemon-tile-muted-rgb'),
        control: rgb('--lemon-control-rgb'),
        'control-hover': rgb('--lemon-control-hover-rgb'),

        // Borders (non-RGB rgba strings for crisp hairline/structural contrast)
        'panel-border': 'var(--lemon-panel-border)',
        'tile-border': 'var(--lemon-tile-border)',
        'tile-border-hover': 'var(--lemon-tile-border-hover)',
        'control-border': 'var(--lemon-control-border)',
        'control-border-hover': 'var(--lemon-control-border-hover)',
        border: 'var(--lemon-tile-border)',

        // Canonical Text hierarchy
        'text-main': rgb('--lemon-text-main-rgb'),
        'text-secondary': rgb('--lemon-text-secondary-rgb'),
        'text-muted': rgb('--lemon-text-muted-rgb'),
        'text-dim': rgb('--lemon-text-dim-rgb'),

        // Brand & Semantic Accents
        primary: {
          DEFAULT: rgb('--lemon-primary-rgb'),
          hover: rgb('--lemon-primary-hover-rgb'),
          active: rgb('--lemon-primary-active-rgb'),
        },
        'primary-border': 'var(--lemon-primary-border)',
        'primary-container': 'var(--lemon-primary-bg)',
        'on-primary': rgb('--lemon-on-primary-rgb'),
        'on-primary-container': rgb('--lemon-primary-rgb'),
        link: rgb('--lemon-link-rgb'),

        success: rgb('--lemon-success-rgb'),
        warning: rgb('--lemon-warning-rgb'),
        danger: rgb('--lemon-error-rgb'),
        info: rgb('--lemon-info-rgb'),

        // Material / feed-app / admin-cms compatibility aliases
        background: rgb('--lemon-platform-rgb'),
        'on-background': rgb('--lemon-text-main-rgb'),
        surface: {
          DEFAULT: rgb('--lemon-tile-rgb'),
          dim: rgb('--lemon-tile-subtle-rgb'),
          bright: rgb('--lemon-tile-rgb'),
          'container-lowest': rgb('--lemon-tile-muted-rgb'),
          'container-low': rgb('--lemon-tile-subtle-rgb'),
          container: rgb('--lemon-tile-rgb'),
          'container-high': rgb('--lemon-tile-subtle-rgb'),
          'container-highest': rgb('--lemon-tile-subtle-rgb'),
          variant: rgb('--lemon-tile-muted-rgb'),
        },
        'on-surface': rgb('--lemon-text-main-rgb'),
        'on-surface-variant': rgb('--lemon-text-secondary-rgb'),
        outline: rgb('--lemon-text-muted-rgb'),
        'outline-variant': 'var(--lemon-tile-border)',

        // Lemon brand spectrum
        lemon: {
          50: '#fcfdeb',
          100: '#f7fbc8',
          200: '#f0f797',
          300: '#e5f05b',
          400: '#d4e157',
          500: '#c9cd58',
          600: '#9ea32f',
          700: '#777a27',
          800: '#535620',
          900: '#343617',
        },
      },
      boxShadow: {
        panel: 'var(--lemon-panel-shadow)',
        tile: 'var(--lemon-tile-shadow)',
        'tile-hover': 'var(--lemon-tile-shadow-hover)',
        soft: '0 2px 12px rgba(0, 0, 0, 0.04)',
        elevated: '0 8px 30px rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
    },
  },
};

export default lemonTailwindPreset;

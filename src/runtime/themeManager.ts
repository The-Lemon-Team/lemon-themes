import {
  DEFAULT_THEME_MODE,
  DEFAULT_THEME_PALETTE,
  getThemeTokens,
  LEMON_THEMES,
} from '../tokens';
import type { ThemeMode, ThemePaletteId, ThemeState } from '../tokens/types';

export const DEFAULT_THEME_STORAGE_KEY = 'lemon_theme_state';
export const LEGACY_MODE_STORAGE_KEY = 'lemon_theme_mode';

export interface ResolveThemeOptions {
  storageKey?: string;
  legacyModeStorageKey?: string;
  defaultPalette?: ThemePaletteId;
  defaultMode?: ThemeMode;
  respectSystemMode?: boolean;
}

export function isValidPalette(value: unknown): value is ThemePaletteId {
  return typeof value === 'string' && Object.prototype.hasOwnProperty.call(LEMON_THEMES, value);
}

export function isValidMode(value: unknown): value is ThemeMode {
  return value === 'light' || value === 'dark';
}

export function getSystemThemeMode(): ThemeMode {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return DEFAULT_THEME_MODE;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Loads persisted theme state from localStorage with graceful fallback to
 * legacy `lemon_theme_mode` key, optional system preference, and defaults.
 */
export function loadThemeState(options: ResolveThemeOptions = {}): ThemeState {
  const {
    storageKey = DEFAULT_THEME_STORAGE_KEY,
    legacyModeStorageKey = LEGACY_MODE_STORAGE_KEY,
    defaultPalette = DEFAULT_THEME_PALETTE,
    defaultMode = DEFAULT_THEME_MODE,
    respectSystemMode = false,
  } = options;

  let palette: ThemePaletteId = defaultPalette;
  let mode: ThemeMode | null = null;

  if (typeof window !== 'undefined') {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<ThemeState>;
        if (isValidPalette(parsed.palette)) {
          palette = parsed.palette;
        }
        if (isValidMode(parsed.mode)) {
          mode = parsed.mode;
        }
      }

      if (mode === null && legacyModeStorageKey) {
        const legacyMode = window.localStorage.getItem(legacyModeStorageKey);
        if (isValidMode(legacyMode)) {
          mode = legacyMode;
        }
      }
    } catch {
      // Ignore storage access/parse errors (e.g. private browsing)
    }
  }

  if (mode === null) {
    mode = respectSystemMode ? getSystemThemeMode() : defaultMode;
  }

  return { palette, mode };
}

/**
 * Persists theme state to localStorage (plus optional legacy mode key for cross-app sync).
 */
export function saveThemeState(
  state: ThemeState,
  options: Pick<ResolveThemeOptions, 'storageKey' | 'legacyModeStorageKey'> = {}
): void {
  if (typeof window === 'undefined') return;
  const {
    storageKey = DEFAULT_THEME_STORAGE_KEY,
    legacyModeStorageKey = LEGACY_MODE_STORAGE_KEY,
  } = options;

  try {
    window.localStorage.setItem(storageKey, JSON.stringify(state));
    if (legacyModeStorageKey) {
      window.localStorage.setItem(legacyModeStorageKey, state.mode);
    }
  } catch {
    // Ignore storage write errors
  }
}

/**
 * Applies `data-theme`, `.dark` / `.light` class, `color-scheme`, and updates
 * `<meta name="theme-color">` on the target document.
 */
export function applyThemeToDocument(state: ThemeState, doc?: Document): void {
  const targetDoc = doc ?? (typeof document !== 'undefined' ? document : undefined);
  if (!targetDoc) return;

  const root = targetDoc.documentElement;
  root.setAttribute('data-theme', state.palette);
  root.setAttribute('data-theme-mode', state.mode);

  if (state.mode === 'dark') {
    root.classList.add('dark');
    root.classList.remove('light');
  } else {
    root.classList.add('light');
    root.classList.remove('dark');
  }
  root.style.colorScheme = state.mode;

  const tokens = getThemeTokens(state.palette, state.mode);
  const metaTheme = targetDoc.querySelector('meta[name="theme-color"]:not([media])');
  if (metaTheme) {
    metaTheme.setAttribute('content', tokens.metaThemeColor);
  }
}

/**
 * Returns a minimal inline script string suitable for `<head>` to eliminate FOUC
 * before Angular/React hydration mounts.
 */
export function getHeadBootstrapScript(options: ResolveThemeOptions = {}): string {
  const storageKey = JSON.stringify(options.storageKey ?? DEFAULT_THEME_STORAGE_KEY);
  const legacyKey = JSON.stringify(options.legacyModeStorageKey ?? LEGACY_MODE_STORAGE_KEY);
  const defaultPalette = JSON.stringify(options.defaultPalette ?? DEFAULT_THEME_PALETTE);
  const defaultMode = JSON.stringify(options.defaultMode ?? DEFAULT_THEME_MODE);

  return `(function(){try{var d=document.documentElement,p=${defaultPalette},m=${defaultMode},raw=localStorage.getItem(${storageKey});if(raw){var s=JSON.parse(raw);if(s&&(s.palette==='atom'||s.palette==='slate'))p=s.palette;if(s&&(s.mode==='light'||s.mode==='dark'))m=s.mode;}else{var lm=localStorage.getItem(${legacyKey});if(lm==='light'||lm==='dark')m=lm;}d.setAttribute('data-theme',p);d.setAttribute('data-theme-mode',m);d.classList.toggle('dark',m==='dark');d.classList.toggle('light',m==='light');d.style.colorScheme=m;}catch(e){}})();`;
}

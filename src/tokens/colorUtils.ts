/**
 * Converts a 6-digit (or 3-digit) hex color string to space-separated RGB triplets
 * suitable for CSS custom properties used with Tailwind `<alpha-value>` syntax
 * (e.g. `rgb(var(--lemon-bg-tile) / <alpha-value>)`).
 */
export function hexToRgbTriplet(hex: string): string {
  const clean = hex.trim().replace(/^#/, '');
  const expanded =
    clean.length === 3
      ? clean
          .split('')
          .map((ch) => ch + ch)
          .join('')
      : clean;

  if (!/^[0-9a-fA-F]{6}$/.test(expanded)) {
    throw new Error(`Invalid hex color: "${hex}"`);
  }

  const r = Number.parseInt(expanded.slice(0, 2), 16);
  const g = Number.parseInt(expanded.slice(2, 4), 16);
  const b = Number.parseInt(expanded.slice(4, 6), 16);

  return `${r} ${g} ${b}`;
}

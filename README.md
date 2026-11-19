# @lemon/themes

Общий пакет дизайн-токенов, палитр, Tailwind-пресета и runtime-утилит для экосистемы Lemon (`lemon-watchers`, `lemon-seasons` / `lemon-calendarium`).

## Доступные темы (2 × 2)

| Палитра | ID | Light | Dark | Происхождение |
|---|---|---|---|---|
| **Lemon Atom Theme** *(по умолчанию)* | `atom` | Архитектурная светлая платформа (`#e2e8f0` / `#edf1f6` + белые плашки, акцент `#707600`) | Atom One Dark (`#1b1d23` / `#21252b` / `#282c34`, акцент `#e5c07b`) | `admin-cms` |
| **Lemon Slate Theme** | `slate` | Воздушная светлая (`#f8fafc` + `#ffffff`, акцент `#2481cc`) | Глубокий сине-сланцевый (`#0e1621` / `#18222d`, акцент `#2481cc`) | `feed-app` |

---

## Быстрый старт

### 1. CSS-переменные
Подключите `@lemon/themes/tokens.css` (и при необходимости `@lemon/themes/surfaces.css`):

```css
@import '@lemon/themes/tokens.css';
@import '@lemon/themes/surfaces.css';
```

По умолчанию (`:root` и `:root.dark`) активна **Lemon Atom Theme**. Для явного переключения:
- `data-theme="atom"` или `data-theme="slate"` на `<html>`
- класс `.dark` или `.light` на `<html>`

### 2. Tailwind Preset
В `tailwind.config.js`:

```js
import lemonPreset from '@lemon/themes/tailwind';

export default {
  presets: [lemonPreset],
  content: ['./index.html', './src/**/*.{ts,tsx,html}'],
};
```

Доступные семантические цвета (с поддержкой `/opacity`):
- Поверхности: `bg-platform`, `bg-canvas`, `bg-panel`, `bg-tile`, `bg-tile-subtle`, `bg-tile-muted`, `bg-control`
- Текст: `text-text-main`, `text-text-secondary`, `text-text-muted`, `text-text-dim`
- Акценты: `text-primary`, `bg-primary`, `text-on-primary`, `bg-primary-container`, `border-primary-border`, `text-success`, `text-warning`, `text-danger`, `text-info`
- Границы и тени: `border-tile-border`, `border-control-border`, `shadow-panel`, `shadow-tile`, `shadow-tile-hover`

### 3. Runtime-утилиты (Angular / React / Vanilla)

```ts
import {
  applyThemeToDocument,
  loadThemeState,
  saveThemeState,
} from '@lemon/themes';

const initial = loadThemeState({ defaultPalette: 'atom', defaultMode: 'dark' });
applyThemeToDocument(initial);
```

### 4. Ant Design v5 (`admin-cms`)

```ts
import { createAntdThemeConfig } from '@lemon/themes/antd';

const antdTheme = createAntdThemeConfig({ palette: 'atom', mode: 'dark' });
```

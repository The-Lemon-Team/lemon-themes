import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'tailwind/preset': 'src/tailwind/preset.ts',
    'antd/createAntdTheme': 'src/antd/createAntdTheme.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  sourcemap: true,
  external: ['antd', 'tailwindcss'],
});

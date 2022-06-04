import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import ViteFonts from 'vite-plugin-fonts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('box-'),
        },
      },
    }),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
    }),
    Components({
      /* options */
    }),
    ViteFonts({
      google: {
        families: [
          {
            name: 'BioRhyme',
            styles: 'wght@400;700;800',
          },
          {
            name: 'Dosis',
            styles: 'wght@300;400;500;600',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    // Use the DOM environment for all tests by default
    runtimeEnv: 'dom',
  },
});
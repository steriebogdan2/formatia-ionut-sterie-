import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Baseline for browsers that support ES modules and dynamic import; avoids
    // shipping transpilation helpers modern browsers do not need.
    target: 'es2020',
    cssCodeSplit: true,
    // Source maps are useful in production and are only downloaded by devtools.
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // React and the router change far less often than page code, so they
          // are cached separately and survive content deploys.
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});

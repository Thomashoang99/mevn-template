import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  // shared settings for any port
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname
    }
  },
  server: {
    // default port: 5173 (overridden by --port)
    strictPort: true,   // fail if port is in use
    open: true          // open browser on start
  }
});

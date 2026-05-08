import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5500,
    strictPort: true,
    proxy: {
      '/api-itsm': {
        target: 'https://madison88-itsm.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-itsm/, '/api')
      }
    }
  },
  preview: {
    port: 5500,
    strictPort: true,
    proxy: {
      '/api-itsm': {
        target: 'https://madison88-itsm.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-itsm/, '/api')
      }
    }
  }
});

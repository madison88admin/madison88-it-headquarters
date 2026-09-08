import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5500,
    strictPort: true,
    proxy: {
      '/api-itsm': {
        target: 'http://5.223.78.194:3011',
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
        target: 'http://5.223.78.194:3011',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-itsm/, '/api')
      }
    }
  }
});

import { defineConfig } from 'vite';

// Load environment variables
const baseURL = process.env.VITE_BASE_URL || '/';

export default defineConfig({
  base: baseURL, // Set the base URL from environment variable
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 3000,
  },
});

import { defineConfig } from 'vite'
import viteShopify from "vite-plugin-shopify";

export default defineConfig({
  server: {
    port: 5050,
  },
  plugins: [
    /* Plugin options are not required, defaults shown */
    viteShopify({
      // Root path to your Shopify theme directory (location of snippets, sections, templates, etc.)
      themeRoot: "./",
      // Front-end source code directory
      sourceCodeDir: "frontend",
      // Front-end entry points directory
      entrypointsDir: "frontend/entrypoints",
      // Additional files to use as entry points (accepts an array of file paths or glob patterns)
      additionalEntrypoints: []
    })
  ]
});
/// <reference types="vitest/config" />
import { defineConfig } from "vite";

// base "./" keeps asset paths relative, so the build works on GitHub Pages
// (served from /<repo>/) and when opening dist/index.html from disk.
export default defineConfig({
  base: "./",
  build: { target: "es2022" },
  test: { environment: "node", globals: false, include: ["tests/**/*.test.ts"] },
});

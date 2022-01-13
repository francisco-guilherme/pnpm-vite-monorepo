/// <reference types="vite/client" />

import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

const isExternal = (id: string) => !id.startsWith(".") && !path.isAbsolute(id);

export default defineConfig({
  plugins: [react({ jsxRuntime: "classic" }), dts()],
  build: {
    lib: {
      entry: "./src/index.ts",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: isExternal,
    },
    sourcemap: true,
    minify: false,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});

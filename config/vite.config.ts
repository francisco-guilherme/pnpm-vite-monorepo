/// <reference types="vite/client" />
import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react({ jsxRuntime: "classic" }),
    dts({
      skipDiagnostics: false,
      logDiagnostics: true,
      outputDir: "./dist/types",
    }),
    ,
    tsconfigPaths({ loose: true }),
  ],
  build: {
    sourcemap: true,
    emptyOutDir: true,
    lib: {
      entry: resolve(process.cwd(), "src", "index.ts"),
      formats: ["es", "cjs"],
      fileName: (ext) => `index.${ext}.js`,
    },
  },
});

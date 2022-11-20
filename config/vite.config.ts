/// <reference types="vite/client" />
import glob from "glob";
import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react({ jsxRuntime: "classic" }),
    tsconfigPaths({ loose: true }),
    dts({
      skipDiagnostics: true,
      outputDir: "dist/types",
      entryRoot: "src",
    }),
  ],
  build: {
    outDir: resolve(process.cwd(), "dist/es"),
    lib: {
      entry: resolve(process.cwd(), "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      input: glob.sync(resolve(process.cwd(), "src/**/*.{ts,tsx}")),
      output: {
        preserveModules: true,
        entryFileNames: ({ name: fileName }) => `${fileName}.js`,
      },
      external: [/node_modules/],
    },
  },
});

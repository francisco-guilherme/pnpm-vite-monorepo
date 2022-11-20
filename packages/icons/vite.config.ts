/// <reference types="vite/client" />
import glob from "glob";
import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

import pkg from "./package.json";

export default defineConfig({
  plugins: [
    react({ jsxRuntime: "classic" }),
    tsconfigPaths({ loose: true }),
    dts({
      skipDiagnostics: true,
      outputDir: "dist/types",
      entryRoot: "bin",
    }),
  ],
  build: {
    outDir: resolve(process.cwd(), "dist/es"),
    lib: {
      entry: resolve(process.cwd(), "bin/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      input: glob.sync(resolve(process.cwd(), "bin/**/*.{ts,tsx}")),
      output: {
        preserveModules: true,
        entryFileNames: ({ name: fileName }) => `${fileName}.js`,
      },
      external: [
        ...Object.keys(pkg.dependencies),
        ...Object.keys(pkg.peerDependencies),
        /node_modules/,
      ],
    },
  },
});

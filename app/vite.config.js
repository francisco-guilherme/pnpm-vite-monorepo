import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths({ root: resolve(__dirname, "..") })],
  resolve: {
    alias: {
      "@hitachivantara/uikit-core": resolve(__dirname, "../packages/core/src"),
      "@hitachivantara/uikit-icons": resolve(
        __dirname,
        "../packages/icons/bin"
      ),
      "@hitachivantara/uikit-styles": resolve(
        __dirname,
        "../packages/styles/src"
      ),
    },
  },
});

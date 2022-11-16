/// <reference types="vite/client" />
import { defineConfig, mergeConfig } from "vite";

import viteConfig from "../../config/vite.config";

export default mergeConfig(viteConfig, defineConfig({}));

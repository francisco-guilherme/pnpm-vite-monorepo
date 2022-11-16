const tsconfigPaths = require("vite-tsconfig-paths");
const glob = require("glob");
const path = require("path");

const rootDir = path.resolve(__dirname, "../");
const getStories = () => glob.sync(`${rootDir}/**/*.stories.@(js|jsx|ts|tsx|mdx)`, {});

module.exports = {
  stories: async () => [...getStories()],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  docs: {
    docsPage: "automatic",
    defaultName: "Docs",
  },
  framework: {
    name: "@storybook/react-vite",
  },
  async viteFinal(config) {
    config.plugins.push(tsconfigPaths.default({ loose: true }));

    return config;
  },
};

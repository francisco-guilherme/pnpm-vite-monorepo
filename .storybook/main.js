module.exports = {
  stories: ["../packages/**/*.stories.@(ts|tsx|mdx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  docs: {
    docsPage: "automatic",
    defaultName: "Docs",
  },
  framework: {
    name: "@storybook/react-vite",
  },
  async viteFinal(config) {
    return config;
  },
};

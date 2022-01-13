import { StoryObj } from "@storybook/react";
import { Header } from "./Header";

export default { title: "Header", component: Header };

export const Main: StoryObj<typeof Header> = {
  args: {
    children: "Welcome to NEXT Design System!",
  },
};

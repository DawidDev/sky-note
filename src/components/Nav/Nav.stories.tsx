// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import Nav from "./Nav";

export default {
  title: "Components/Nav",
  component: Nav,
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => (
  <BrowserRouter>
    <Nav {...args} />
  </BrowserRouter>
);

export const Primary = Template.bind({});

Primary.args = {
  isOpen: true,
  onClose: () => console.log("close"),
};

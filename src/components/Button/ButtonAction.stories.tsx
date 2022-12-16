// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ButtonAction  from './ButtonAction';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ButtonAction',
  component: ButtonAction,
} as ComponentMeta<typeof ButtonAction>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ButtonAction> = (args) => <ButtonAction {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Label",
  handleClick: () => {},
};
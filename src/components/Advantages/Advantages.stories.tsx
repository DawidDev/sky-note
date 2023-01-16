// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Advantages from './Advantages';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Advantages',
  component: Advantages,
} as ComponentMeta<typeof Advantages>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Advantages> = (args) => <Advantages/>;

export const Primary = Template.bind({});

Primary.args = {
};

// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Jumbutron  from './Jumbutron';

export default {
  title: 'Components/Jumbutron',
  component: Jumbutron,
} as ComponentMeta<typeof Jumbutron>;

const Template: ComponentStory<typeof Jumbutron> = (args) => <Jumbutron {...args} />;

export const Primary = Template.bind({});

Primary.args = {

};

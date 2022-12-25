// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputNumber  from './InputNumber';

export default {
  title: 'Components/InputNumber',
  component: InputNumber,
} as ComponentMeta<typeof InputNumber>;

const Template: ComponentStory<typeof InputNumber> = (args) => <InputNumber {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  onChange: () => console.log("zmiana"),
  additionalText: "°C",
  value: 25
};

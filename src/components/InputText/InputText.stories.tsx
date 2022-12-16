// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputText  from './InputText';

export default {
  title: 'Components/InputText',
  component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  onChange: () => console.log("zmiana"),
  placeholder: "Nazwa konstelacji",
  value: "Przykładowa wartość"
};

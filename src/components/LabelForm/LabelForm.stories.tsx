// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import LabelForm  from './LabelForm';

export default {
  title: 'Components/LabelForm',
  component: LabelForm,
} as ComponentMeta<typeof LabelForm>;

const Template: ComponentStory<typeof LabelForm> = (args) => <LabelForm {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: "Nazwa konstelacji"
};

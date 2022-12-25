// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputSelect  from './InputSelect';

export default {
  title: 'Components/InputSelect',
  component: InputSelect,
} as ComponentMeta<typeof InputSelect>;

const Template: ComponentStory<typeof InputSelect> = (args) => <InputSelect {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  options: [
    {value: '1', label: 'Pochmurnie'},
    {value: '2', label: 'Pochmurnie 2'},
    {value: '3', label: 'Pochmurnie 3'},
    {value: '4', label: 'Pochmurnie 4'},
    {value: '5', label: 'Pochmurnie 5'},
  ]
};

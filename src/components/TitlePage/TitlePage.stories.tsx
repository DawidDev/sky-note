// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import TitlePage  from './TitlePage';

export default {
  title: 'Components/TitlePage',
  component: TitlePage,
} as ComponentMeta<typeof TitlePage>;

const Template: ComponentStory<typeof TitlePage> = (args) => <TitlePage {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: "Nazwa konstelacji"
};

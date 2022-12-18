// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import FeatureBox  from './FeatureBox';

export default {
  title: 'Components/FeatureBox',
  component: FeatureBox,
} as ComponentMeta<typeof FeatureBox>;

const Template: ComponentStory<typeof FeatureBox> = (args) => <FeatureBox {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  //text: "Nazwa konstelacji"
};

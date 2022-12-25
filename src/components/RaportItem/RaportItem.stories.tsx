// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import RaportItem  from './RaportItem';

export default {
  title: 'Components/RaportItem',
  component: RaportItem,
} as ComponentMeta<typeof RaportItem>;

const Template: ComponentStory<typeof RaportItem> = (args) => <RaportItem {...args} />;

export const VariantFirst = Template.bind({});

VariantFirst.args = {
  label: "Poziom zachmurzenia",
  number: 5,
  maxNumber: 10,
  tooltipContent: "To jest dodatkowe info",
  variantItem: 1
};

export const VariantSecond = Template.bind({});

VariantSecond.args = {
  label: "Poziom zachmurzenia",
  tooltipContent: "To jest dodatkowe info",
  dataText: ['duże opady', 'silny wiatr', 'duża mgła', 'słaba widoczność', 'przymrozek'],
  variantItem: 2
};

export const VariantThird = Template.bind({});

VariantThird.args = {
  label: "Poziom zachmurzenia",
  tooltipContent: "To jest dodatkowe info",
  phaseOnMoon: 6,
  variantItem: 3
};

export const VariantFour = Template.bind({});

VariantFour.args = {
  label: "Widoczne gwiazdy",
  dataStars: [
    {value: "#", label: "Gwiazda północna"},
    {value: "#", label: "Gwiazda północna"},
    {value: "#", label: "Gwiazda północna"},
    {value: "#", label: "Gwiazda północna"},
  ],
  tooltipContent: "To jest dodatkowe info",
  variantItem: 4
};


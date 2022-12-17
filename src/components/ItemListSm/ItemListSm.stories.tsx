// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ItemListSm  from './ItemListSm';

export default {
  title: 'Components/ItemListSm',
  component: ItemListSm,
} as ComponentMeta<typeof ItemListSm>;

const Template: ComponentStory<typeof ItemListSm> = (args) => <ItemListSm {...args} />;

export const RaportsList = Template.bind({});

RaportsList.args = {
  data: ["22.05.2022", "23.15", "bardzo dobra", "5", "22C"]
};


export const StarsList = Template.bind({});
StarsList.args = {
  data: ["Gwiazda polarna", "Pas Oriona", "Supernova"]
};

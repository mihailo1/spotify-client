import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Album from './Album';
import { albumDecorator } from 'utils';

export default {
  title: 'Example/Album',
  component: Album,
} as ComponentMeta<typeof Album>;

const Template: ComponentStory<typeof Album> = (args) => <Album {...args} />;

export const Default = Template.bind({});
Default.decorators = albumDecorator;

Default.args = {
  id: '3Ks0eeH0GWpY4AU20D5HPD',
  images: [
    {
      url: 'https://i.scdn.co/image/ab67616d0000b27368968350c2550e36d96344ee',
    },
  ],
  isDelete: true,
  name: 'Gemini Rights',
};

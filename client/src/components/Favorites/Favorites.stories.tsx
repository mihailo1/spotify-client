import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Favorites from './Favorites';
import { albumDecorator } from 'utils';

export default {
  title: 'Example/Favorites',
  component: Favorites,
} as ComponentMeta<typeof Favorites>;

const Template: ComponentStory<typeof Favorites> = (args) => (
  <Favorites {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      album: {
        id: '3Ks0eeH0GWpY4AU20D5HPD',
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d0000b27368968350c2550e36d96344ee',
          },
        ],
        name: 'Gemini Rights',
      },
    },
    {
      album: {
        id: '22zpCX6Nb9ppOVklalvGec',
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d0000b27348f2487a18a735f457404eb9',
          },
        ],
        name: 'Ignorance is Bliss',
      },
    },
    {
      album: {
        id: '3KLLRiCnqYvt78H52TeZ1k',
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d0000b273c705e4061a1de1139ced6554',
          },
        ],
        name: "Angel's Pulse",
      },
    },
    {
      album: {
        id: '3Ks0eeH0GWpY4ASU20D5HPD',
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d0000b27368968350c2550e36d96344ee',
          },
        ],
        name: 'Gemini Rights',
      },
    },
    {
      album: {
        id: '22zpCX6Nb9pApOVklalvGec',
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d0000b27348f2487a18a735f457404eb9',
          },
        ],
        name: 'Ignorance is Bliss',
      },
    },
    {
      album: {
        id: '3KLLRiCEnqYvt78H52TeZ1k',
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d0000b273c705e4061a1de1139ced6554',
          },
        ],
        name: "Angel's Pulse",
      },
    },
    {
      album: {
        id: '3Ks0eeHQ0GWpY4AU20D5HPD',
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d0000b27368968350c2550e36d96344ee',
          },
        ],
        name: 'Gemini Rights',
      },
    },
    {
      album: {
        id: '22zpCX6Nb9ppOVklalXvGec',
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d0000b27348f2487a18a735f457404eb9',
          },
        ],
        name: 'Ignorance is Bliss',
      },
    },
    {
      album: {
        id: '3KLLRViCnqYvt78H52TeZ1k',
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d0000b273c705e4061a1de1139ced6554',
          },
        ],
        name: "Angel's Pulse",
      },
    },
  ],
};

Default.decorators = albumDecorator;

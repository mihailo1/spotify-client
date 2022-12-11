import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Search from './Search';
import { albumDecorator } from 'utils';

export default {
  title: 'Example/Search',
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  albums: [
    {
      name: 'Drake',
      id: 'ab67616d0000b27368968350c2550e36d96344ee',
      images: [
        {
          url: 'https://i.scdn.co/image/ab67616d0000b27368968350c2550e36d96344ee',
        },
      ],
    },
    {
      name: 'Daft Punk',
      id: 'ab6761610000e5eb96d66c60658005885d1135ce',
      images: [
        {
          url: 'https://i.scdn.co/image/ab6761610000e5eb96d66c60658005885d1135ce',
        },
      ],
    },
    {
      name: 'Lana Del Rey',
      id: 'ab6761610000e5ebc5903678d3db18e271e42be0',
      images: [
        {
          url: 'https://i.scdn.co/image/ab6761610000e5ebc5903678d3db18e271e42be0',
        },
      ],
    },
  ],
  setSearch: () => {},
};
Default.decorators = albumDecorator;

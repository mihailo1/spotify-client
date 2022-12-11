import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Player from './Player';
import { MutationStatus } from 'react-query';

export default {
  title: 'Example/Player',
  component: Player,
} as ComponentMeta<typeof Player>;

const Template: ComponentStory<typeof Player> = (args) => <Player {...args} />;

const setTemplate = {
  next: {
    context: undefined,
    data: undefined,
    error: null,
    failureCount: 0,
    isError: false,
    isIdle: true,
    isLoading: false,
    isPaused: false,
    isSuccess: false,
    mutate: () => {},
    mutateAsync: () => new Promise(() => {}),
    reset: () => {},
    status: 'idle' as MutationStatus,
    variables: undefined,
  },

  pause: {
    context: undefined,
    data: undefined,
    error: null,
    failureCount: 0,
    isError: false,
    isIdle: true,
    isLoading: false,
    isPaused: false,
    isSuccess: false,
    mutate: () => {},
    mutateAsync: () => new Promise(() => {}),
    reset: () => {},
    status: 'idle' as MutationStatus,
    variables: undefined,
  },

  play: {
    context: undefined,
    data: undefined,
    error: null,
    failureCount: 0,
    isError: false,
    isIdle: true,
    isLoading: false,
    isPaused: false,
    isSuccess: false,
    mutate: () => {},
    mutateAsync: () => new Promise(() => {}),
    reset: () => {},
    status: 'idle' as MutationStatus,
    variables: undefined,
  },

  prev: {
    context: undefined,
    data: undefined,
    error: null,
    failureCount: 0,
    isError: false,
    isIdle: true,
    isLoading: false,
    isPaused: false,
    isSuccess: false,
    mutate: () => {},
    mutateAsync: () => new Promise(() => {}),
    reset: () => {},
    status: 'idle' as MutationStatus,
    variables: undefined,
  },
};

export const Default = Template.bind({});
Default.args = {
  current: undefined,
  set: setTemplate,
};

export const Playing = Template.bind({});
Playing.args = {
  current: {
    isPlaying: true,
    item: {
      name: 'Планета',
      artists: [
        {
          name: 'Деревянные киты',
        },
      ],
      id: '6cmtGQShI63HxqpeXreW6W',
      album: {
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d0000b2735c53dd798157a0a4e42008c1',
          },
        ],
        name: 'Под воду',
      },
    },
  },
  set: setTemplate,
};

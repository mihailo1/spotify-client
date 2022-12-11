import React, { FC } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FullScreenLoader from '.';
import { ThemeProvider } from '@mui/material';
import { useTheme } from 'themes';

export default {
  title: 'Example/FullScreenLoader',
  component: FullScreenLoader,
} as ComponentMeta<typeof FullScreenLoader>;

const Template: ComponentStory<typeof FullScreenLoader> = () => (
  <FullScreenLoader />
);

export const Default = Template.bind({});
Default.decorators = [
  (Story: FC) => (
    <ThemeProvider theme={useTheme()}>
      <Story />
    </ThemeProvider>
  ),
];

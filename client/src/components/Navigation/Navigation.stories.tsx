import React, { FC } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { Router } from 'react-router-dom';
import defaultHistory from 'custom-history';

import Navigation from './Navigation';
import { useTheme } from '../../themes';

export default {
  title: 'Example/Navigation',
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = () => <Navigation />;

export const Default = Template.bind({});
Default.decorators = [
  (Story: FC) => (
    <Router history={defaultHistory}>
      <MuiThemeProvider theme={useTheme()}>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </MuiThemeProvider>
    </Router>
  ),
];

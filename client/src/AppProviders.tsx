import { Router } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { History } from 'history';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import defaultHistory from 'custom-history';
import { theme as defaultTheme, GlobalStyle } from 'theme';
import { useTheme } from './themes';
import defaultQueryClient from 'queryClient';

interface AppProviderProps {
  children: React.ReactNode;
  history?: History<unknown>;
  theme?: DefaultTheme;
  queryClient?: QueryClient;
}

function AppProviders(props: AppProviderProps) {
  const {
    children,
    theme = defaultTheme,
    history = defaultHistory,
    queryClient = defaultQueryClient,
  } = props;

  return (
    <Router history={history}>
      <MuiThemeProvider {...{ theme: useTheme() }}>
        <SnackbarProvider maxSnack={3}>
          <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <GlobalStyle />
              {children}
              <ReactQueryDevtools position="bottom-right" />
            </QueryClientProvider>
          </ThemeProvider>
        </SnackbarProvider>
      </MuiThemeProvider>
    </Router>
  );
}

export type { AppProviderProps };
export default AppProviders;

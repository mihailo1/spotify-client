import './base.css';
import { SnackbarProvider } from 'notistack';
import { QueryClient, QueryClientProvider } from 'react-query';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <QueryClientProvider client={new QueryClient()}>
      <SnackbarProvider maxSnack={3}>
        <Story />
      </SnackbarProvider>
    </QueryClientProvider>
  ),
];

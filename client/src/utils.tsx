import { IDictionary } from 'types';
import React, { FC } from 'react';
import { SnackbarProvider } from 'notistack';
import { QueryClient, QueryClientProvider } from 'react-query';

export const getCached = () =>
  JSON.parse(localStorage.getItem('store') || '{}');
export const setCached = (values: IDictionary<unknown>) =>
  localStorage.setItem('store', JSON.stringify(values));

export const albumDecorator = [
  (Story: FC) => (
    <QueryClientProvider client={new QueryClient()}>
      <SnackbarProvider maxSnack={3}>
        <Story />
      </SnackbarProvider>
    </QueryClientProvider>
  ),
];

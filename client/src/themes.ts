import { createTheme } from '@mui/material/styles';

export const useTheme = () =>
  createTheme({
    palette: {
      primary: {
        main: '#191414',
      },
    },
  });

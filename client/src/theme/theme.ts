interface Palette {
  global01: string;
  neutral01: string;
  neutral02: string;
}

interface Fonts {}

interface Breakpoints {
  sm: number;
  md: number;
  lg: number;
}

interface Theme {
  palette: Palette;
  fonts: Fonts;
  breakpoints: Breakpoints;
}

const theme: Theme = {
  palette: {
    global01: '#1DB954',
    neutral01: '#FFFFFF',
    neutral02: '#191414',
  },
  fonts: {},
  breakpoints: {
    sm: 768,
    md: 996,
    lg: 1200,
  },
};

export type { Theme, Palette, Fonts, Breakpoints };
export { theme };

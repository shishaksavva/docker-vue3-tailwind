import { ref } from 'vue';

export interface Theme {
  primary: {
    main: string;
    light: string;
    dark: string;
    text: string;
  };
  secondary: {
    main: string;
    light: string;
    dark: string;
    text: string;
  };
  default: {
    main: string;
    light: string;
    dark: string;
    text: string;
  };
}

const primary = {
  main: '#007bff',
  light: '#249af3',
  dark: '#065fd4',
  text: '#000',
};

const secondary = {
  main: '#007bff',
  light: '#249af3',
  dark: '#065fd4',
  text: '#000',
};

export const light: Theme = {
  primary,
  secondary,
  default: {
    main: '#e0e0ff',
    light: '#fff',
    dark: '#9a9abf',
    text: '#000',
  },
};

export const dark: Theme = {
  primary,
  secondary,
  default: {
    main: '#26264d',
    light: '#434382',
    dark: '#09092b',
    text: '#fff',
  },
};

export function useTheme() {
  const theme = ref(light);

  return {
    theme,
  };
}

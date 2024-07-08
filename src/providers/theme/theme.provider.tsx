'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

import { Theme, ThemePanel } from '@radix-ui/themes';

const DARK = 'dark';
const LIGHT = 'light';

type MODE = typeof DARK | typeof LIGHT;

type ThemeProps = {
  mode: MODE;
  toggle: Dispatch<SetStateAction<MODE>>;
};

const ThemeContext = createContext<ThemeProps>({
  mode: DARK,
  toggle: () => {},
});

const ThemeProvider = ThemeContext.Provider;

const AppTheme = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<MODE>(DARK);

  const switchMode = () => {
    if (mode === DARK) setMode(LIGHT);
    if (mode === LIGHT) setMode(DARK);
  };

  const value = { mode, toggle: switchMode };

  return (
    <ThemeProvider value={value}>
      <Theme
        accentColor='jade'
        grayColor='gray'
        radius='large'
        scaling='100%'
        appearance={mode}
      >
        {children}
        <ThemePanel />
      </Theme>
    </ThemeProvider>
  );
};

export default AppTheme;

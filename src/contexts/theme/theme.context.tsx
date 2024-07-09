'use client';

import { ReactNode, useState } from 'react';

import { Theme, ThemePanel } from '@radix-ui/themes';

import { createContextFactory } from '../context.factory';

const DARK = 'dark';
const LIGHT = 'light';

type MODE = typeof DARK | typeof LIGHT;

type ThemeProps = {
  mode: MODE;
  toggle: () => void;
};

const { Provider, useCustomContext } = createContextFactory<ThemeProps>({
  mode: DARK,
  toggle: () => {},
});

export const AppTheme = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<MODE>(LIGHT);

  const switchMode = () => {
    if (mode === DARK) setMode(LIGHT);
    if (mode === LIGHT) setMode(DARK);
  };

  const value = { mode, toggle: switchMode };

  return (
    <Provider value={value}>
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
    </Provider>
  );
};

export const useAppTheme = useCustomContext;

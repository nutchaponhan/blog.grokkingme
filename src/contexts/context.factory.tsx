// src/contextFactory.ts
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  FC,
} from 'react';

type ProviderType = FC<{ children: ReactNode; value: any }>;
type ReactState<T> = [T, Dispatch<SetStateAction<T>>];

interface ContextFactoryReturn<T> {
  Provider: ProviderType;
  useCustomContext: () => T;
}

export function createContextFactory<T>(
  defaultValue: T
): ContextFactoryReturn<T> {
  const Context = createContext<T>(defaultValue);

  const useCustomContext = (): T => {
    const context = useContext(Context);

    if (!context) {
      throw new Error('useCustomContext must be used within a Provider');
    }

    return context;
  };

  const Provider: ProviderType = ({ children, value }) => {
    return (
      <Context.Provider value={{ ...defaultValue, ...value }}>
        {children}
      </Context.Provider>
    );
  };

  return { Provider, useCustomContext };
}

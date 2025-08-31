import React from 'react';

export type ThemeType = 'light' | 'dark';

export interface ThemeContext {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
};

const initialState: ThemeContext = {
  theme: 'light',
  setTheme: () => {},
};

export const ThemeContext = React.createContext<ThemeContext>(initialState);

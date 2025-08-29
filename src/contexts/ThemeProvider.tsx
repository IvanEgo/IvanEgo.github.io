import React from 'react';
import { ThemeContext, ThemeType } from './ThemeContext';
import { GlobalStyles } from '../styles/GlobalStyles';

type ThemeProviderProps = {
  children: React.ReactNode;
};
  
// Provider, который будет управлять темой
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = React.useState<ThemeType>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <GlobalStyles theme={theme} />
      {children}
    </ThemeContext.Provider>
  );
};
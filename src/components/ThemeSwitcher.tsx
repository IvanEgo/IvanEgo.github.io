import * as React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export function ThemeSwitcher() {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <button className="button is-small" onClick={toggleTheme}>
      Toggle Theme ({theme})
    </button>
  );
}
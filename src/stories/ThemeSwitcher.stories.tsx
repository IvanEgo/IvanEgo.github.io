// src/components/ThemeSwitcher.stories.tsx
import React from 'react';
import { ThemeProvider } from '../contexts/ThemeProvider';
import { ThemeSwitcher } from '../components/ThemeSwitcher';

export default {
  title: 'Components/ThemeSwitcher',
  component: ThemeSwitcher,
};

export const Default = () => (
  <ThemeProvider>
    <ThemeSwitcher />
  </ThemeProvider>
);
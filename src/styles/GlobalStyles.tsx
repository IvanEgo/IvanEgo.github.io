import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme === 'light' ? '#ffffff' : '#333333'};
    color: ${({ theme }) => theme === 'light' ? '#333333' : '#ffffff'};
    transition: background-color .3s, color .3s;
  }
`;
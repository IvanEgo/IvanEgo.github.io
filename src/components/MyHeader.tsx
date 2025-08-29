import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { ThemeSwitcher } from '../components/ThemeSwitcher';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  padding: 1rem;
  z-index: 1000;
  width: 100%;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
`;

export default function MyHeader() {
  return (
    <StyledHeader>
      <ThemeSwitcher />
    </StyledHeader>
  );
};
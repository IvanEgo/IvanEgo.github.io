import React from 'react';
import styled from 'styled-components';
import MyHeader from './MyHeader';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function Layout ({ children }) {
  return (
    <StyledLayout>
      <MyHeader />
      {children}
    </StyledLayout>
  );
};
import React from 'react';
import styled from 'styled-components';
import MyHeader from './MyHeader';

type LayoutProps = {
  children: React.ReactNode;
};

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function Layout ({ children }: LayoutProps) {
  return (
    <StyledLayout>
      <MyHeader />
      {children}
    </StyledLayout>
  );
};
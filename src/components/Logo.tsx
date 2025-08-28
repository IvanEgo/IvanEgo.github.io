import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #3498db;
  margin-right: 1rem;
`;

export default function Logo () {
  return <StyledLogo />;
};
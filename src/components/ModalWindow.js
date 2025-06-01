import * as React from 'react'
import styled from 'styled-components'

const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`

const ContentBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  box-shadow: 10px 10px 10px grey;
  padding: 20px;
  min-width: 300px;
  max-width: 500px;
  display: ${props => props.visible ? 'block' : 'none'};
`

const CloseButton = styled.button`
  float: right;
  cursor: pointer;
  font-size: 20px;
  color: grey;
  background: none;
  border: none;
  outline: none;
  &:hover {
    color: black;
  }
`

export default function ModalWindow({visible, onClose, children}) {
  return (
    <Mask>
      <ContentBox visible={visible}>
        <CloseButton type="button" onClick={() => onClose && onClose()}>✕</CloseButton>
        {children}
      </ContentBox>
    </Mask>
  )
}
import * as React from 'react'
import Mask from './Mask'
import ContentBox from './ContentBox'
import CloseButton from './CloseButton'

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
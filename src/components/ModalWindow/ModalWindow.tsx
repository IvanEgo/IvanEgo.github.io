import * as React from 'react'
import Mask from './Mask'
import ContentBox from './ContentBox'
import CloseButton from './CloseButton'

interface ModalWindowProps {
  visible: boolean;           // Видимо ли модальное окно
  onClose: () => void           // Callback для закрытия модального окна
  children: React.ReactNode;  // Содержимое модального окна
}

export default function ModalWindow({visible, onClose, children}: ModalWindowProps) {
  //if (!visible) return null;

  return (
    !visible ? null :
    <Mask>
      <ContentBox>
        <CloseButton type="button" onClick={() => onClose && onClose()}>✕</CloseButton>
        {children}
      </ContentBox>
    </Mask>
  )
}
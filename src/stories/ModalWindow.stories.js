import React from 'react'
import ModalWindow from '../components/ModalWindow/ModalWindow'

export default {
  title: 'Components/ModalWindow',
  component: ModalWindow,
  tags: ['autodocs'],
}

export const Visible = {
  args: {
    visible: true,
    children: <p>Содержимое модального окна.</p>,
  },
}

export const Hidden = {
  args: {
    visible: false,
    children: <p>Содержимое модального окна.</p>,
  },
}
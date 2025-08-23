import React from 'react'
import OperationDetails from '../components/OperationDetails'
import { Description } from '@storybook/blocks'

export default {
  title: 'Components/OperationDetails',
  component: OperationDetails,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    amount: 95,
    category: "Категория операции",
    title: "Наименование операции",
    description: "Описание операции",
    date: "2025/05/31",
    onEditClick: () => alert(`Редактироване операции`)
  },
};

export const LongDescription = {
  args: {
    amount: 95,
    category: "Категория операции",
    title: "Наименование операции",
    description: "Очень длинное описание операции",
    date: "2025/05/31",
    onEditClick: () => alert(`Редактироване операции`)
  },
};
import React from 'react'
import OperationSummary from '../components/OperationSummary'
import { Description } from '@storybook/blocks'

export default {
  title: 'Components/OperationSummary',
  component: OperationSummary,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    amount: 95,
    category: "Категория операции",
    title: "Наименование операции",
    description: "Описание операции",
  },
}

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
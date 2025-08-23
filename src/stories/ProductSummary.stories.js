import React from 'react';
import ProductSummary from '../components/ProductSummary';

export default {
  title: 'Components/ProductSummary',
  component: ProductSummary,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    price: 1999,
    imageUrl: "https://otus.ru/_next/static/images/img/logo2022_without_text-ad6a01e8608432b9967c441a0f4760b4.svg",      
    title: 'Наименование товара',
    description: 'Описание товара',
  },
};

export const LongDescription = {
  args: {
    price: 1999,
    imageUrl: "https://otus.ru/_next/static/images/img/logo2022_without_text-ad6a01e8608432b9967c441a0f4760b4.svg",
    title: 'Наименование товара',
    description: 'Очень длинное описание товара',
  },
};
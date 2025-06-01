import React from 'react';
import ProductCartItem from '../components/ProductCartItem';

// Основной метаданные для компонента
export default {
  title: 'Components/ProductCartItem',
  component: ProductCartItem,
  tags: ['autodocs'],
};

export const Default = {
    args: {
      price: 999,
      imageUrl: "https://otus.ru/_next/static/images/img/logo2022_without_text-ad6a01e8608432b9967c441a0f4760b4.svg",
      title: 'Наименование товара',
      quantity: 10
    },
  };
  
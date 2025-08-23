import React from 'react';
import ProductDetails from '../components/ProductDetails';

// Основной метаданные для компонента
export default {
  title: 'Components/ProductDetails',
  component: ProductDetails,
  tags: ['autodocs'],
};

export const Default = {
    args: {
      price: 1999,
      imageUrl: "https://otus.ru/_next/static/images/img/logo2022_without_text-ad6a01e8608432b9967c441a0f4760b4.svg",
      category: "Категория товара", 
      title: 'Наименование товара',
      description: 'Описание товара',
    },
  };
  
  export const LongDescription = {
    args: {
      price: 1999,
      imageUrl: "hhttps://otus.ru/_next/static/images/img/logo2022_without_text-ad6a01e8608432b9967c441a0f4760b4.svg",
      category: "Категория товара", 
      title: 'Наименование товара',
      description: 'Очень длинное описание товара',
    },
  };
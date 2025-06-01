import React from 'react';
import ButtonCart from '../components/ButtonCart';

export default {
  title: 'Components/ButtonCart', // Категория и название элемента
  component: ButtonCart,
  tags: ['autodocs'],
};

export const EmptyCart = {
  args: {
    counter: 0,
    disabled: false
  },
};

export const CartWithItems = {
  args: {
    counter: 1,
    disabled: false
  },
};

export const Disabled = {
  args: {
    counter: 0,
    disabled: true
  },
};
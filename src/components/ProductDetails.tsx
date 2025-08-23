import React from 'react';
import ButtonCart from './ButtonCart';

interface ProductDetailsProps {
  price: number;
  imageUrl: string;
  category: string;
  title: string;
  description: string;
}

const ProductDetails = ({ price, imageUrl, category, title, description } : ProductDetailsProps) => {

  return (
    <div className="box has-background-light">
      <img
        src={imageUrl}
        alt={title}
        width="82"
        height="42"
      />

      <p className="has-text-black">{title}</p>
      <p className="has-text-black"><b>Категория:</b> {category}</p>
      <p className="has-text-black"><b>Цена:</b> {price.toLocaleString()} ₽</p>
      <p className="has-text-black"><b>Описание:</b> {description}</p>
      <ButtonCart disabled/>
    </div>
  );
};

export default ProductDetails;
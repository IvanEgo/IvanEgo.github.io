import React from 'react';
import ButtonCart from './ButtonCart';

const ProductSummary = ({ price, imageUrl, title, description, }) => {

  const truncatedDescription =
    description.length <= 25
      ? description
      : `${description.substring(0, 25)}...`;

  return (
    <div className="box has-background-light">
      <img
        src={imageUrl}
        alt={title}
        width="82"
        height="42"
      />
      
      <p className="has-text-black">{title}</p>
      <p className="has-text-black"><b>Цена:</b> {price.toLocaleString()} ₽</p>
      <p className="has-text-black"><b>Описание:</b> {truncatedDescription}</p>
      <ButtonCart disabled>В корзину</ButtonCart>
    </div>
  );
};

export default ProductSummary;
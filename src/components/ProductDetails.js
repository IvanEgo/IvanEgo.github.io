import React from 'react';
import ButtonCart from './ButtonCart';

const ProductDetails = ({ price, imageUrl, category, title, description, }) => {

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
      <ButtonCart disabled>В корзину</ButtonCart>
    </div>
  );
};

export default ProductDetails;
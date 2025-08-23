import React from 'react';

interface ProductCartItemProps {
  id: number;
  title: string;
  price: number;
  quantity: number;
  imageUrl?: string;
  removeProduct: (id: number) => void;
}

function ProductCartItem({ id, title, price, quantity, imageUrl, removeProduct }: ProductCartItemProps) {
  return (
    <div className="box has-background-light">
      {imageUrl && <img src={imageUrl} alt={title} />}
      <h3>{title}</h3>
      <p><b>Цена:</b> {price.toLocaleString()} ₽</p>
      <p><b>Количество:</b> {quantity}</p>
      <button className="button is-danger is-small" onClick={() => removeProduct(id)}>
        Удалить
      </button>
    </div>
  );
}

export default ProductCartItem;
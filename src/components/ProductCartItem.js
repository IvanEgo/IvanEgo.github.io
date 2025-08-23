import React from 'react';

function ProductCartItem({ id, title, price, quantity, imageUrl, removeProduct }) {
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
import React from 'react';

// Краткое представление операции
export default function OperationSummary ({ amount, category, title, description }) {
  const truncatedDescription =
    description.length <= 25
      ? description
      : `${description.substring(0, 25)}...`;

  return (
    <div class="box has-background-light">
      <h3>{title}</h3>
      <p><b>Категория:</b> {category}</p>
        <p className="has-text-black"><b>Сумма:</b> {amount.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}</p>
        <p className="has-text-black"><b>Описание:</b> {truncatedDescription}</p>
    </div>
  );
};

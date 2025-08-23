
import React from 'react';

interface OperationDetailsProps {
  amount: number;
  category: string;
  title: string;
  description: string;
  date: string | Date;
  onEditClick?: () => void;
}

export default function OperationDetails ({ amount, category, title, description, date, onEditClick }: OperationDetailsProps) {
    const handleEditClick = () => {
      if (onEditClick) {
        onEditClick();
      }
    };
    
    return (
      <div className="box has-background-light">
        <h3>{title}</h3>
        <p className="has-text-black"><b>Категория:</b> {category}</p>
        <p className="has-text-black"><b>Сумма:</b> {amount.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}</p>
        <p className="has-text-black"><b>Описание:</b> {description}</p>
        <p className="has-text-black"><b>Дата:</b> {new Date(date).toLocaleDateString()}</p>
        
        <button className="button is-success is-small" onClick={handleEditClick}>
          Редактировать
        </button>
      </div>
    );
  };
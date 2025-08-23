import React from 'react';

interface ButtonCartProps {
  counter?: number;
  disabled?: boolean;
}

const ButtonCart = ({ counter = 0, disabled }: ButtonCartProps) => {
  const handleIncrease = () => {
    console.log('Увеличить количество');
  };

  const handleDecrease = () => {
    if (counter > 0) {
      console.log('Уменьшить количество');
    }
  };

  return (
    <div className="button-cart">
      {counter === 0 ? (
        <button onClick={handleIncrease} className="button is-success is-small" disabled = {disabled}>В корзину</button>  
      ) : (
        <div className="field has-addons">      
          <div className="control">
            <button onClick={handleDecrease} className="button is-square" disabled = {disabled}>
              -
            </button>
          </div>
          <div className="control">
            <input className="input" value={counter} readOnly disabled={disabled}/>
          </div>
          <div className="control">
            <button onClick={handleIncrease} className="button is-square" disabled = {disabled}>
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonCart;
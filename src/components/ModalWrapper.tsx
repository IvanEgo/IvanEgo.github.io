import * as React from 'react';
import ModalWindow from './ModalWindow/ModalWindow';

const ModalWrapper = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [inputText, setInputText] = React.useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <label htmlFor="modal-input">Введите текст...</label><br />
      <input
        id="modal-input"
        type="text"
        placeholder="Введите текст..."
        value={inputText}
        onChange={handleInputChange}
      />
      <br />
      <button className="button is-small" onClick={openModal}>Открыть модальное окно</button>
      <ModalWindow visible={modalIsOpen} onClose={closeModal} children={inputText} />
    </>
  );
};

export default ModalWrapper;
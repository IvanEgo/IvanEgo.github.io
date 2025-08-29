import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '../contexts/ThemeProvider';
import MyHeader from 'src/components/MyHeader';
import ModalWrapper from 'src/components/ModalWrapper';

function App() {
  return (
    <ThemeProvider>
      <MyHeader />
      <ModalWrapper />
      <div>-----------------------</div>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
// import './app/index.css';
import App from './app/App';
import 'bulma/css/bulma.min.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

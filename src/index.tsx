import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement //Необходимо ли?
);

root.render(
  <React.StrictMode>
    <h1>Hello, World!</h1>
    <App />
  </React.StrictMode>
);

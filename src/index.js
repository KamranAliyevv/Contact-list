import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContactProvider from './context/ContactProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContactProvider>
    <App />
  </ContactProvider>
);

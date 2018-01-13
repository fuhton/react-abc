import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // eslint-disable-line
import App from './App';

render(
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root'),
);

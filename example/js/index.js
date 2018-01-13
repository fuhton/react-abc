import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom'; // eslint-disable-line
import App from './App';

render(
  (
    <HashRouter>
      <App />
    </HashRouter>
  ), document.getElementById('root'),
);

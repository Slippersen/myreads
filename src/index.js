import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CollectionProvider } from './contexts/CollectionContext';
import App from './App';
import './index.css';

ReactDOM.render(
  <CollectionProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CollectionProvider>,
  document.getElementById('root')
);

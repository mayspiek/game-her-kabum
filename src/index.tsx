import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
  <Helmet>
    <title>Game.her</title>
  </Helmet>
  
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);

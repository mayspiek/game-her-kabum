import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Helmet } from 'react-helmet';
import LogoPequenaW from './assets/img/logo-pequena-w.png';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
  <Helmet>
    <title>Game.her</title>
    <link rel="icon" href={LogoPequenaW} />
  </Helmet>
  
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);

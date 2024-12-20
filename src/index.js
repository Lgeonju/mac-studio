import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Main from './Main';
import Header from './fragment/Header';

const root = ReactDOM.createRoot(document.getElementById('wrap'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Main/>
    </BrowserRouter>
  </React.StrictMode>
);
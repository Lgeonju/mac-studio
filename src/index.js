import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import Header from './fragment/Header';

const root = ReactDOM.createRoot(document.getElementById('wrap'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
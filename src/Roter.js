import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Practice from './pages/Practice/Practice';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pr" element={<Practice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

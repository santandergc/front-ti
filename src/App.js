import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Warehouse from './components/warehouse';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Warehouse/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

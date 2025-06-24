import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import NotFound from './pages/NotFound'
import './App.css';
import KeyTrainer from './pages/KeyTrainer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trainer" element={<KeyTrainer/>}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 
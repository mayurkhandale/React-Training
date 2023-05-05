
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import NavBar from './NavBar';

import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const [status, setStatus] = useState();

  return (
    <div className="App">
      <div className="row">
        <div className="col text-center mt-5">

          <p className="h3 display-3">Crash  <span className="fw-bold">2023</span></p>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;


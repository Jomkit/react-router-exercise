import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "../stylesheets/VendingMachine.css"
import Home from './Home';
import Coolish from './Coolish';
import FamiChiki from './FamiChiki';
import CoffeeJelly from './CoffeeJelly';
import NavBar from './NavBar';

const VendingMachine = () => {
  return (
    <div>
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coolish' element={<Coolish />} />
          <Route path='/famichiki' element={<FamiChiki />} />
          <Route path='/coffee-jelly' element={<CoffeeJelly />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default VendingMachine
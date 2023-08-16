import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch, Navigate } from 'react-router-dom';

import { Home } from './Pages/Home';
import { SignUp } from './Pages/SignUp';
import { Navbar } from './Components/General/Navbar';
import { Footer } from './Components/General/Footer';
import { Contact } from './Pages/Contact';
import { About } from './Pages/About';
import { Account } from './Pages/Account';
import { Cart } from './Pages/Cart';
import { ProductDetails } from './Pages/ProductDetails';

export const AppRouter = () => {
  return (
    <Router>
    <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/*" element={<Navigate to="/" />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer></Footer>
    </Router>
  );
};


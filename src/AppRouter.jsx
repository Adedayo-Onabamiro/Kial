import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

import { Home } from './Pages/Home';
import { SignUp } from './Pages/SignUp';
import { Navbar } from './Components/General/Navbar';
import { Footer } from './Components/General/Footer';
import { Contact } from './Pages/Contact';
import { About } from './Pages/About';
import { Account } from './Pages/Account';

export const AppRouter = () => {
  return (
    <Router>
    <Navbar></Navbar>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Account" element={<Account />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer></Footer>
    </Router>
  );
};


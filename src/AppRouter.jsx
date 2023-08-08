import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

import { Home } from './Pages/Home';
import { SignUp } from './Pages/SignUp';
import { Navbar } from './Components/General/Navbar';
import { Footer } from './Components/General/Footer';

export const AppRouter = () => {
  return (
    <Router>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer></Footer>
    </Router>
  );
};


import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
//import Products from './components/Pages/Products';
import Services from './components/Pages/Services';
import SignUp from './components/Pages/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" element={<Services />} />
        
        <Route path="/sign-up" element={<SignUp />} />
        </Routes>
    </Router>
  );
}

export default App;

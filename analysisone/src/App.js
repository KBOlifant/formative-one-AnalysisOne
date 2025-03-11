import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Timeline from "./components/Timeline";
import Comparison from "./components/Comparison";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      
      <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Timeline" element={<Timeline />} />
          <Route path="/Comparison" element={<Comparison />} />
      </Routes>
    </Router>
    </>
    
  );
}

export default App;

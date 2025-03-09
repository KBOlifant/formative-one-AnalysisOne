import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomeSection from './components/Home'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <HomeSection />
    </>
    
  );
}

export default App;

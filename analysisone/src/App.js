import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Timeline from "./components/Pages/Timeline";
import Comparison from "./components/Pages/Comparison";
import axios from 'axios';

const apiURL = 'https://api.jolpi.ca/ergast/f1/2024/results/';

// async function fetchData(){
//   try {
//   const response = await axios.get(apiURL, {
//     params: {
//       limit: 100
//     }
//   });
//   console.log(response.data);
//   } catch (error) {
//     console.error("Error fetching dog data:", error);
//   }
// }

//fetchData()

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

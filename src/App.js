import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './sites/about'
import Error from './sites/error'
import Home from './sites/home'
import Navbar from './components/navbar'
import SingleCocktail from "./sites/singlecocktail";
function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cocktail/:id" element={<SingleCocktail/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;

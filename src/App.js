import React from "react";
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from "./components/About";
import { Route, Router, Routes } from "react-router";

const App = () => {
  return (

    <div className="wrapper">
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </div>
  );
}
export default App;

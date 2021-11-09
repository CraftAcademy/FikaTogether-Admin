import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Events from "./components/Events";
import About from "./components/About";

const App = () => {
  return (
    <BrowserRouter>     
      <Routes>        
        <Route exact path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />        
        <Route path="/about" element={<About />} />        
      </Routes>
      <Header />
    </BrowserRouter>
  );
};

export default App;

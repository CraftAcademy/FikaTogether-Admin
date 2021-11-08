import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Events from "./components/Events";
import About from "./components/About";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/about" component={About} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

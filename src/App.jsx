import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Departments from "./components/Departments";
import Events from "./components/Events";
import About from "./components/About";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { amber } from "@mui/material/colors";

const App = () => {
  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      primary: {
        ...amber,
        ...(mode === "dark"),
      },
    },
  });

  const darkModeTheme = createTheme(getDesignTokens("dark"));
  return (
    <ThemeProvider theme={darkModeTheme}>
      <CssBaseline />

      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Events />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

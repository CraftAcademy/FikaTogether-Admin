import React, { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Departments from "./components/Departments";
import Events from "./components/Events";
import About from "./components/About";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const App = () => {
  const our_custome_theme = useMemo(
    () =>
      createTheme({
        palette: {
          ...{
            primary: {
              main: "#ffffff",
              default: "#ffffff",
              container: "#011326",
            },
            background: {
              default: "#011326",
              paper: "#011326",
            },
            text: {
              primary: "#D6BC01",
              secondary: "#4C9074",
            },
          },
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={our_custome_theme}>
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

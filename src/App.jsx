import React, { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Departments from "./components/Departments";
import Events from "./components/Events";
import Contact from "./components/Contact";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import i18n from "./i18n";

const App = () => {
  const { authenticated } = useSelector((state) => state);

  if (navigator.language.includes("sv")) {
    i18n.changeLanguage("sv");
  }

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
        components: {
          MuiButton: {
            text: "#011326",
            styleOverrides: {
              outlined: {
                backgroundColor: "#4C9074",
              },
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
        {!authenticated ? (
          <Login />
        ) : (
          <>
            <Header />
            <Routes>
              <Route exact path="/" element={<Events />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

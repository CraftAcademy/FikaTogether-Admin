import React, { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Departments from "./components/Departments";
import Events from "./components/Events";
import Contact from "./components/Contact";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import ParticipantList from "./components/ParticipantList";
import WelcomePage from "./components/welcomeView/WelcomePage";

const App = () => {
  const { authenticated, participantList } = useSelector((state) => state);

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
              container: "#4C9074",
            },
            text: {
              primary: "#D6BC01",
              secondary: "#4C9074",
            },
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              outlined: {
                backgroundColor: "#4C9074",
                color: "#D6BC01",
                font: "small-caption",
                fontWeight: "bold"
              },
            },
          },
        },
      }),
    []
  );

  let departmentUrl = `/departments/${participantList.department}`;

  return (
    <ThemeProvider theme={our_custome_theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        {!authenticated ? (
          <WelcomePage />
        ) : (
          <>
            <Routes>
              <Route exact path="/" element={<Events />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/contact" element={<Contact />} />
              <Route path={departmentUrl} element={<ParticipantList />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

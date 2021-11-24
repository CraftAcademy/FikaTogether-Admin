import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Departments from "./components/Departments";
import Events from "./components/Events";
import Contact from "./components/Contact";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import ParticipantList from "./components/ParticipantList";
import WelcomePage from "./components/welcomeView/WelcomePage";
import theme from "../src/theme/theme";

const App = () => {
  const { authenticated, participantList } = useSelector((state) => state);

  let departmentUrl = `/departments/${participantList.department?.toLowerCase()}`;

  return (
    <ThemeProvider theme={theme}>
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

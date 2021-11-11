import React, { useState, useMemo, createContext } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Box, Paper } from "@mui/material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import HelpIcon from "@mui/icons-material/Help";
import EventIcon from "@mui/icons-material/Event";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import logo from "../img/logo.png";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const Header = () => {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {              
                text: {
                  primary: "#011326",
                  
                },
              }
            : {
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
            }),
        },
      }),
    [mode]
  );
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const sx = isTabletOrMobile
    ? { position: "fixed", bottom: 0, left: 0, right: 0 }
    : { position: "relative" };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ pb: 7 }}>
          <Paper sx={sx} elevation={3}>
            {!isTabletOrMobile ? (
              <img src={logo} alt="Logo" height="50" className="logo" />
            ) : (
              <></>
            )}
            <BottomNavigation showLabels>
              <BottomNavigationAction
                component={Link}
                to="/"
                data-cy="events-btn"
                icon={<EventIcon />}
                label="Events"
              />
              <BottomNavigationAction
                component={Link}
                to="/departments"
                data-cy="departments-btn"
                label="Departments"
                icon={<BusinessIcon />}
              />
              <BottomNavigationAction
                component={Link}
                to="/about"
                data-cy="about-btn"
                icon={<HelpIcon />}
                label="About"
              />
              <IconButton
                sx={{ ml: 1 }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
              >
                {theme.palette.mode === "dark" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
            </BottomNavigation>
          </Paper>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Header;

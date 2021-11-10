import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Box, Paper } from "@mui/material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import EventIcon from "@mui/icons-material/Event";
// import Image from "material-ui-image";
import logo from "../img/logo.png";

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const sx = isTabletOrMobile
    ? { position: "fixed", bottom: 0, left: 0, right: 0 }
    : { position: "relative" };
  return (
    <Box sx={{ pb: 7 }}>
      <Paper sx={sx} elevation={3}>
        <BottomNavigation showLabels>
        <img src={logo} />
          <BottomNavigationAction
            component={Link}
            to="/"
            data-cy="events-btn"
            icon={<HomeIcon />}
            label="Events"
          />
          <BottomNavigationAction
            component={Link}
            to="/departments"
            data-cy="departments-btn"
            label="Departments"
            icon={<EventIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/about"
            data-cy="about-btn"
            icon={<HelpIcon />}
            label="About"
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default Header;

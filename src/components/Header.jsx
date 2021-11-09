import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import EventIcon from "@mui/icons-material/Event";

const Header = () => {
  return (
    <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          data-cy="home-btn"
          label="Home"
          icon={<HomeIcon />}
        >
          <Link to="/">Home</Link>
        </BottomNavigationAction>
        <BottomNavigationAction
          data-cy="events-btn"
          icon={<EventIcon />}
          label="Events"
        >
          <Link to="/Events">Events</Link>{" "}
        </BottomNavigationAction>
        <BottomNavigationAction
          data-cy="about-btn"
          icon={<HelpIcon />}
          label="About"
        >
          <Link to="/About">About</Link>
        </BottomNavigationAction>
      </BottomNavigation>
    </Box>
  );
};

export default Header;

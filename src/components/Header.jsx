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
          component={Link}
          to="/"
          data-cy="home-btn"
          label="Home"
          icon={<HomeIcon />}
        />

        <BottomNavigationAction
          component={Link}
          to="/events"
          data-cy="events-btn"
          icon={<EventIcon />}
          label="Events"
        />

        <BottomNavigationAction
          component={Link}
          to="/about"
          data-cy="about-btn"
          icon={<HelpIcon />}
          label="About"
        />
      </BottomNavigation>
    </Box>
  );
};

export default Header;

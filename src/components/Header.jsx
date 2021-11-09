import React from "react";
import { Link } from "react-router-dom";
import { Box, Paper } from "@mui/material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import EventIcon from "@mui/icons-material/Event";

const Header = () => {
  return (
    <Box sx={{ pb: 7 }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
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

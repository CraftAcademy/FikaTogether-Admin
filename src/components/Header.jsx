import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import EventIcon from "@mui/icons-material/Event";

const Header = () => {
  return (
    <Box sx={{ width: 1000 }}>
      <BottomNavigation showLabels>
        <Link to="/">
          <BottomNavigationAction icon={<HomeIcon />} label="Home" />
        </Link>
        <Link to="/Events">
          <BottomNavigationAction icon={<EventIcon />} label="Events" />
        </Link>
        <Link to="/About">
          <BottomNavigationAction icon={<HelpIcon />} label="About" />
        </Link>
      </BottomNavigation>
    </Box>
  );
};

export default Header;

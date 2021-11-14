import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import store from "../state/store/configureStore";
import { Box, Paper } from "@mui/material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import HelpIcon from "@mui/icons-material/Help";
import EventIcon from "@mui/icons-material/Event";
import LanguageIcon from "@mui/icons-material/Language";
import logo from "../img/logo.png";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const Header = () => {
  const { appLanguage } = useSelector((state) => state);
  const { t } = useTranslation();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const sx = isTabletOrMobile
    ? { position: "fixed", bottom: 0, left: 0, right: 0 }
    : { position: "relative" };
  const picHeight = isTabletOrMobile ? { height: 6 } : { height: 6 };

  const languageOptions = [
    { key: "1", value: "en", text: "en" },
    { key: "2", value: "sv", text: "sv" },
  ];

  const switchLanguage = (language) => {
    i18n.changeLanguage(language);
    store.dispatch({ type: "SET_LANGUAGE", payload: language });
  };

  const handleChangeLanguage = (event) => {
    let language = event.target.value;
    ["en", "sv"].includes(language) && switchLanguage(language);
  };

  return (
    <Box sx={{ pb: 7 }}>
      <Paper sx={sx} elevation={3}>
        <BottomNavigation showLabels sx={{ height: 100 }}>
          <BottomNavigationAction
            component={Link}
            to="/"
            data-cy="events-btn"
            icon={
              <img
                src={logo}
                alt="Logo"
                height={isTabletOrMobile ? "60" : "65"}
                className="logo"
              />
            }
          />
          <BottomNavigationAction
            component={Link}
            to="/departments"
            data-cy="departments-btn"
            label={t("departments")}
            icon={<BusinessIcon sx={{ fontSize: 45 }} />}
          />
          <BottomNavigationAction
            component={Link}
            to="/contact"
            data-cy="contact-btn"
            icon={<HelpIcon sx={{ fontSize: 45 }} />}
            label={t("contact")}
          />
          <BottomNavigationAction
            position="right"
            data-cy="language-btn"
            icon={<LanguageIcon sx={{ fontSize: 45 }} />}
            text={appLanguage}
            label={appLanguage}
            options={languageOptions}
            onClick={(event) => {
              handleChangeLanguage(event);
            }}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import HelpIcon from "@mui/icons-material/Help";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { useSelector } from "react-redux";
import LoginModal from "./welcomeView/LoginModal";
import Logo from "./misc/Logo";

const Header = () => {
  const { t } = useTranslation();
  const [languageChoice, setLanguageChoice] = useState(true);
  const { authenticated } = useSelector((state) => state);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const sx = isTabletOrMobile
    ? { position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 2000 }
    : { position: "relative" };

  const handleLanguageClick = () => {
    setLanguageChoice(!languageChoice);

    let language = "en";
    if (languageChoice === true) {
      language = "en";
    } else {
      language = "sv";
    }

    i18n.changeLanguage(language);
  };
  <Header />;

  return (
    <Box sx={{ pb: 7 }}>
      <Paper sx={sx} elevation={3}>
        {!authenticated ? (
          <BottomNavigation showLabels sx={{ height: 100 }}>
            <LoginModal />
            <Logo />
            <BottomNavigationAction
              data-cy="language-btn"
              icon={<LanguageIcon sx={{ fontSize: 45 }} />}
              label={t("language")}
              onClick={() => {
                handleLanguageClick();
              }}
            />
          </BottomNavigation>
        ) : (
          <BottomNavigation showLabels sx={{ height: 100 }}>
            <Logo />
            <BottomNavigationAction
              component={Link}
              to="/departments"
              data-cy="departments-btn"
              icon={<BusinessIcon sx={{ fontSize: 45 }} />}
              label={t("departments")}
            />

            <BottomNavigationAction
              component={Link}
              to="/contact"
              data-cy="contact-btn"
              icon={<HelpIcon sx={{ fontSize: 45 }} />}
              label={t("contact")}
            />

            <BottomNavigationAction
              data-cy="language-btn"
              icon={<LanguageIcon sx={{ fontSize: 45 }} />}
              label={t("language")}
              onClick={() => {
                handleLanguageClick();
              }}
            />
          </BottomNavigation>
        )}
      </Paper>
    </Box>
  );
};

export default Header;

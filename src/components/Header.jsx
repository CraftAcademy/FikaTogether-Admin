import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
  Button,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import HelpIcon from "@mui/icons-material/Help";
import LanguageIcon from "@mui/icons-material/Language";
import logo from "../img/logo.png";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { useSelector } from "react-redux";
import LoginModal from "./welcomeView/LoginModal";

const Header = () => {
  const { t } = useTranslation();
  const [languageChoice, setLanguageChoice] = useState(true);
  const { authenticated } = useSelector((state) => state);
  const [open, setOpen] = useState(false);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const sx = isTabletOrMobile
    ? { position: "fixed", bottom: 0, left: 0, right: 0 }
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
        <BottomNavigation showLabels sx={{ height: 100 }}>
          {!authenticated ? (
            <BottomNavigation>
              <Button
                data-cy="login-modal-btn"
                variant="outlined"
                margin="dense"
                sx={{
                  m: 2.5,
                }}
                onClick={() => setOpen(true)}
                style={{
                  color: "inherit",
                  textDecoration: "inherit",
                  height: "3.5rem",
                }}
              >
                Sign In
              </Button>
              <LoginModal open={open} setOpen={setOpen} />
            </BottomNavigation>
          ) : (
            <BottomNavigation> </BottomNavigation>
          )}

          <BottomNavigationAction
            component={Link}
            to="/"
            data-cy="events-btn"
            icon={
              <img
                src={logo}
                alt="Logo"
                height={isTabletOrMobile ? "60" : "85"}
                className="logo"
              />
            }
          />
          {authenticated ? (
            <BottomNavigation>
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
            </BottomNavigation>
          ) : (
            <BottomNavigation></BottomNavigation>
          )}
          <BottomNavigationAction
            data-cy="language-btn"
            icon={<LanguageIcon sx={{ fontSize: 45 }} />}
            label={t("language")}
            onClick={() => {
              handleLanguageClick();
            }}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default Header;

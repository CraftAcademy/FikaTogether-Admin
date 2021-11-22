import React from "react";
import RegisterCompany from "./RegisterCompany";
import { Container, Box } from "@mui/material";
import SectionNames from "./SectionNames";
import AboutSection from "./AboutSection";
import welcomePageStyle from "../../theme/welcomePage"

const WelcomePage = () => {
 const classes = welcomePageStyle()

  return (
    <>
      <Box component="form" data-cy="register-interest" className={classes.topBox}>
        <RegisterCompany />
        <SectionNames />
      </Box>

      <Container >
        <AboutSection />
      </Container>
    </>
  );
};

export default WelcomePage;

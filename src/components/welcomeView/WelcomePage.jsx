import React from "react";
import RegisterCompany from "./RegisterCompany";
import { Container, Box } from "@mui/material";
import SectionNames from "./SectionNames";
import AboutSection from "./AboutSection";

const WelcomePage = () => {
  const style = {
    bgcolor: "background.welcome",
  };
  const box_1 = {
    position: "relative",
    left: "50%",
    transform: "translate(-50%)",
    width: "100%",
    height: "550px",
    p: 4,
    background: "linear-gradient(0deg, #011326 10%, #4C9074 90%)",
    // background: "#4C9074"
  };

  return (
    <>
    <Box component="form" data-cy="register-interest" sx={box_1}>
        <RegisterCompany />
        <SectionNames />
      </Box>
        <Container sx={style}>
      <AboutSection />
    </Container>
    </>
  );
};

export default WelcomePage;

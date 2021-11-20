import React from "react";
import RegisterCompany from "./RegisterCompany";
import { Container, Box } from "@mui/material";

const WelcomePage = () => {
  const style = {
    bgcolor: "background.welcome",
  };
  const box_1 = {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%)",
    width: "100%",
    height: "800px",
    p: 4,
    bgcolor: "#4C9074",
  };

  return (
    <Container sx={style}>
    <Box component="form" data-cy="register-interest" sx={box_1}>

      <RegisterCompany />
    </Box>

    </Container>
  );
};

export default WelcomePage;

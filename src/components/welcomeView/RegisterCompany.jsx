import React from "react";
import { Button, Box, TextField, Typography, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

const RegisterCompany = () => {
  const { t } = useTranslation();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 500px)" });

  const btnLocation = isTabletOrMobile
    ? { left: "25%", width: "100px" }
    : { left: "39.5%", width: "20%" };

  const typography = {
    fontSize: 30,
    m: 1,
    fontWeight: "bold",
  };

  return (
    <Box
      sx={{
        p: 1,
        width: "100%",
      }}
    >
      <Typography sx={typography} component="div" align="center">
        {t("culture")}
      </Typography>{" "}
      <Typography sx={typography} component="div" gutterBottom align="center">
       { t("register1")}
      </Typography>{" "}
      <br />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          data-cy="company-name"
          id="name"
          label="Company Name"
          variant="outlined"
          margin="dense"
          type="password"
        />
        <TextField
          data-cy="company-email"
          id="email"
          label={t("email")}
          variant="outlined"
          margin="dense"
        />
      </Box>
      <Stack spacing={0}>
        <Button
          data-cy="register-interest-btn"
          type="submit"
          variant="outlined"
          margin="dense"
          sx={{
            m: 2,
            color: "inherit",
            textDecoration: "inherit",
            height: "3.5rem",
            width: "100px",
            left: btnLocation,
          }}
        >
         { t("register2")}
        </Button>
      </Stack>
      <Typography sx={typography} component="div" gutterBottom align="center">
        Or read on to find out why you should.
      </Typography>{" "}
    </Box>
  );
};

export default RegisterCompany;

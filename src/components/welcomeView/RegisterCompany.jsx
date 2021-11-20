import React from "react";
import { Button, Box, TextField, Typography, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

const RegisterCompany = () => {
  const { t } = useTranslation();

  const box_1 = {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%)",
    width: "100%",
    height: "800px",
    p: 4,
    bgcolor: "#4C9074",
  };

  const typography = {
    fontSize: 35,
    m: 1,
    fontWeight: "bold",
  };

  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: "#011326",
        borderRadius: 50,
        border: "20px solid",
        borderColor: "background.container",
        width: "100%",
      }}
    >
      <Typography sx={typography} component="div" align="center">
        If you believe in developing a better work culture,
      </Typography>{" "}
      <Typography sx={typography} component="div" gutterBottom align="center">
        register your interest here.
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
          loadingPosition="start"
          sx={{
            m: 2,
            color: "inherit",
            textDecoration: "inherit",
            height: "3.5rem",
            width: "25%",
            left: "36%",
          }}
        >
          Register Interest
        </Button>
      </Stack>
      <Typography sx={typography} component="div" gutterBottom align="center">
        Or read on to find out why you should.
      </Typography>{" "}
    </Box>
  );
};

export default RegisterCompany;

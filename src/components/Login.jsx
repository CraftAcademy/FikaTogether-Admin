import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  return (
    <>
      <Box
        data-cy="sign-in-form"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          textAlign: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          data-cy="email-input"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          margin="dense"
        />
        <TextField
          data-cy="password-input"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          margin="dense"
        />
        <Button data-cy="btn-login" variant="contained" margin="dense">
          Sign In
        </Button>
      </Box>
      
    </>
  );
};

export default Login;

import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const onSubmit = () => {
    toast.success("Login Successful", {
      onClose: () =>
        dispatch({
          type: "SET_CURRENT_USER",
          payload: true,
        }),
    });
  };

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
        <Button
          data-cy="btn-login"
          onClick={onSubmit}
          variant="contained"
          margin="dense"
        >
          Sign In
        </Button>
      </Box>
      <div data-cy="sign-in-toast">
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
};

export default Login;

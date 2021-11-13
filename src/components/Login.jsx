import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import auth from "../modules/auth";

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const response = await auth.signIn(email, password);

      toast.success("Login Successful", {
        onClose: () =>
          dispatch({
            type: "SET_CURRENT_USER",
            payload: response.data,
          }),
      });
    } catch (error) {
      toast.error(error.response.data.errors[0]);
    }
  };

  return (
    <>
      <Box
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          textAlign: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <form onSubmit={handleSubmit} data-cy="sign-in-form">
          <TextField
            data-cy="email-input"
            defaultValue="email"
            id="email"
            label="Email"
            variant="outlined"
            margin="dense"
          />
          <TextField
            data-cy="password-input"
            defaultValue="password"
            id="password"
            label="Password"
            variant="outlined"
            margin="dense"
          />
          <Button
            data-cy="btn-login"
            type="submit"
            variant="contained"
            margin="dense"
          >
            Sign In
          </Button>
        </form>
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

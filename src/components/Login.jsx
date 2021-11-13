import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import auth from "../modules/auth";
import logo from "../img/logo.png";
import { useMediaQuery } from "react-responsive";

const Login = () => {
  const dispatch = useDispatch();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 500px)" });

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
      {!isTabletOrMobile ? (
        <img src={logo} alt="Logo" height="250" className="login-logo" />
      ) : (
        <></>
      )}
      <Box
        sx={{
          "& > :not(style)": { m: 1, width: "20ch" },
          textAlign: "center",
          boxShadow: 1,
          borderRadius: 0,
          p: 10,
          border: "2px solid #4C9074",
          position: "absolute",
          left: "15%",
          top: "25%",
          display:"inline-block",
        }}
        noValidate
        autoComplete="on"
        className="login-box"
      >
        <form onSubmit={handleSubmit} data-cy="sign-in-form">
          <TextField
            data-cy="email-input"
            id="email"
            label="Email"
            variant="outlined"
            margin="dense"
          />
          <TextField
            data-cy="password-input"
            id="password"
            label="Password"
            variant="outlined"
            margin="dense"
            type="password"
          />
          <Button
            data-cy="btn-login"
            type="submit"
            variant="contained"
            margin="dense"
            sx={{
              backgroundColor: "#4C9074",
            }}
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

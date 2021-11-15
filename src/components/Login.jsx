import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { LoadingButton } from "@mui/lab";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import auth from "../modules/auth";
import logo from "../img/logo.png";
import logoCup from "../img/FikaTogetherCup.png";
import { useMediaQuery } from "react-responsive";

const Login = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const border = isTabletOrMobile
    ? { border: "" }
    : { border: "3px solid #4C9074" };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const response = await auth.signIn(email, password);
      setLoading(true);
      toast.success(t("loginSuccess"), {
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
        <img src={logoCup} alt="Logo" height="250" className="login-cup" />
      )}
      <Box
        sx={{
          "& > :not(style)": { m: 1, width: "20ch" },
          textAlign: "center",
          boxShadow: 1,
          borderRadius: 0,
          p: 5,
          border: border,
          position: "absolute",
          left: "15%",
          top: "25%",
          display: "inline-block",
        }}
        noValidate
        autoComplete="on"
        className="login-box"
      >
        <form onSubmit={handleSubmit} data-cy="sign-in-form">
          <TextField
            data-cy="email-input"
            id="email"
            label={t("email")}
            variant="outlined"
            margin="dense"
          />
          <TextField
            data-cy="password-input"
            id="password"
            label={t("password")}
            variant="outlined"
            margin="dense"
            type="password"
          />
          <LoadingButton
            data-cy="btn-login"
            type="submit"
            variant="contained"
            margin="dense"
            loading={loading}
            sx={{
              backgroundColor: "#4C9074",
            }}
          >
            {t("login")}
          </LoadingButton>
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

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Box, TextField, Modal, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useTranslation } from "react-i18next";
// import auth from "../../modules/auth";
import Authentication from "../../modules/auth";
import welcomePageStyle from "../../theme/welcomePage";

const LoginModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const classes = welcomePageStyle();

  const handleSubmit = async (event) => {
    event.preventDefault();
    Authentication.signIn(event.target);
    // const form = event.target;
    // const email = form.email.value;
    // const password = form.password.value;
    // try {
    //   const response = await auth.signIn(email, password);
    //   setLoading(true);
    //   toast.success(t("loginSuccess"), {
    //     onClose: () =>
    //       dispatch({
    //         type: "SET_CURRENT_USER",
    //         payload: response.data,
    //       }),
    //   });
    // } catch (error) {
    //   toast.error(error.response.data.errors[0]);
    // }
  };

  return (
    <>
      <Button
        data-cy="login-modal-btn"
        variant="outlined"
        margin="dense"
        sx={{
          m: 2.5,
          color: "D6BC01",
          textDecoration: "inherit",
          height: "3.5rem",
        }}
        onClick={() => setOpen(true)}
      >
        Sign In
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
      >
        <Box noValidate autoComplete="on" className={classes.loginBox}>
          <form onSubmit={handleSubmit} data-cy="sign-in-form">
            <TextField
              className={classes.inputLogin}
              data-cy="email-input"
              id="email"
              label={t("email")}
              variant="outlined"
              margin="dense"
            />
            <TextField
              className={classes.inputLogin}
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
                m: 2,
                backgroundColor: "#4C9074",
                color: "#D6BC01",
              }}
            >
              {t("login")}
            </LoadingButton>
          </form>
        </Box>
      </Modal>
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

export default LoginModal;

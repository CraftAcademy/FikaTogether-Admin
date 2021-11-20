import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { ToastContainer, toast } from "react-toastify";
import { Box, TextField, Modal } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useTranslation } from "react-i18next";
import auth from "../modules/auth";

const LoginModal = ({ open, setOpen }) => {
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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Modal open={open} 
        aria-labelledby="modal-modal-title"
        >
        <Box sx={style} noValidate autoComplete="on" className="login-box">
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
              m: 2,
              backgroundColor: "#4C9074",
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

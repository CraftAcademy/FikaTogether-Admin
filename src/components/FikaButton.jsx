import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@mui/material";
import CoffeeIcon from "@mui/icons-material/Coffee";
import { Fika } from "../modules/apiHelpers/fikaHelper";

const FikaButton = () => {
  const { message } = useSelector((state) => state);

  const onSubmit = () => {
    Fika.create();
    console.log(message)
    Fika.index();
  };

  return (
    <>
      <Button
        data-cy="submit-btn"
        variant="outlined"
        startIcon={<CoffeeIcon />}
        style={{ color: "inherit", textDecoration: "inherit" }}
        onClick={onSubmit}
        disableElevation
      >
        Create Fikas
      </Button>

      <div data-cy="submit-response-toast">
        <ToastContainer
          position="top-center"
          autoClose={2000}
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

export default FikaButton;

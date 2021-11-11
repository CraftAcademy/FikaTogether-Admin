import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Container } from "@mui/material";
import CoffeeIcon from "@mui/icons-material/Coffee";

const FikaButton = () => {
  const notify = () => toast("Your fikas are being scheduled");

  return (
    <>
      <Button
        data-cy="submit-btn"
        variant="outlined"
        startIcon={<CoffeeIcon />}
        style={{ color: "inherit", textDecoration: "inherit" }}
        onClick={notify}
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

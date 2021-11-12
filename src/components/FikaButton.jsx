import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadingButton } from "@mui/lab";
import CoffeeIcon from "@mui/icons-material/Coffee";
import { Fika } from "../modules/apiHelpers/fikaHelper";

const FikaButton = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);
    Fika.create(setLoading);
    Fika.index();
  };

  return (
    <>
      <LoadingButton
        data-cy="submit-btn"
        variant="outlined"
        startIcon={<CoffeeIcon />}
        loadingPosition="start"
        style={{ color: "inherit", textDecoration: "inherit" }}
        onClick={onSubmit}
        disableElevation
        loading={loading}
      >
        Create Fikas
      </LoadingButton>

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
          onClose={() => setLoading(false)}
        />
      </div>
    </>
  );
};

export default FikaButton;

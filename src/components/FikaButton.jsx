import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadingButton } from "@mui/lab";
import CoffeeIcon from "@mui/icons-material/Coffee";
import { Fika } from "../modules/fikas";

const FikaButton = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);
    Fika.create(setLoading);
    // Fika.index();
  };

  return (
    <>
      <LoadingButton
        sx={{ m: 5 }}
        data-cy="submit-btn"
        variant="outlined"
        startIcon={<CoffeeIcon />}
        loadingPosition="start"
        style={{ color: "inherit", textDecoration: "inherit" }}
        onClick={onSubmit}
        disableElevation
        loading={loading}
      >
        {`${ loading === false ? ("Create"):("Creating")} Fikas`}
      </LoadingButton>

      <div data-cy="submit-response-toast">
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
          onClose={() => setLoading(false)}
        />
      </div>
    </>
  );
};

export default FikaButton;

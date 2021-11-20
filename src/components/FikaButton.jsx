import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadingButton } from "@mui/lab";
import CoffeeIcon from "@mui/icons-material/Coffee";
import { Fika } from "../modules/fikas";
import { useTranslation } from "react-i18next";
import delay from "delay";

const FikaButton = ({ disabled, showInputs, setShowInputs }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);
    Fika.create(setLoading);
    delay(1000)
    setShowInputs(!showInputs);
  };

  return (
    <>
      <LoadingButton
        // disabled={disabled}
        sx={{ m: 0.1, ml: 1 }}
        data-cy="submit-btn"
        variant="outlined"
        startIcon={<CoffeeIcon />}
        loadingPosition="start"
        style={{
          color: "inherit",
          textDecoration: "inherit",
          height: "3.5rem",
        }}
        onClick={onSubmit}
        disableElevation
        loading={loading}
      >
        {!showInputs ? (
          "Schedule some fikas"
        ) : (
          <>{`${!loading ? t("create") : t("creating")}`}</>
        )}
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

import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import DateAdapter from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const AddParticipantModal = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(new Date(""));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <Box sx={style}>
        <form data-cy="add-participant-form">
          <TextField
            data-cy="name-input"
            id="name"
            label="Name"
            variant="outlined"
            margin="dense"
            fullWidth="true"
          />
          <TextField
            data-cy="email-input"
            id="email"
            label={t("email")}
            variant="outlined"
            margin="dense"
            fullWidth="true"
          />
          <DesktopDatePicker
            data-cy="start-date-input"
            label="Date"
            inputFormat="yyyy/mm/dd"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />

          <Button
            data-cy="add-btn"
            type="submit"
            variant="contained"
            margin="dense"
            fullWidth="true"
            sx={{
              backgroundColor: "#4C9074",
              m: 2,
            }}
          >
            Add Participant
          </Button>
        </form>
      </Box>
    </LocalizationProvider>
  );
};

export default AddParticipantModal;

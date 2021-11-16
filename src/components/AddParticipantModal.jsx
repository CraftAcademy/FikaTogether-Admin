import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { useTranslation } from "react-i18next";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import DateAdapter from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import SeniorityMenu from "./SeniorityMenu";

const AddParticipantModal = () => {
  const { t } = useTranslation();
  const [dateValue, setDateValue] = useState();

  const handleChange = (newValue) => {
    setDateValue(newValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const seniority = form.seniority.value;
    const date = dateValue;

    // try {
    //   const response = await post(name, email, seniority, date);
      

    console.log(form);
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
        <form data-cy="add-participant-form" onSubmit={handleSubmit}>
          <TextField
            data-cy="name-input"
            id="name"
            label={t("inputNameLabel")}
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
          <div data-cy="start-date-input">
            <DesktopDatePicker
              label={t("InputStartDate")}
              // inputFormat="yyyy/mm/dd"
              value={dateValue}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
          <FormLabel component="legend">{t("Management")}</FormLabel>
          <RadioGroup
            row
            aria-label={t("selectManagementLabel")}
            name="row-radio-buttons-group"
            defaultValue="Non Management"
            data-cy="management"
          >
            <FormControlLabel
              value="Management"
              control={<Radio />}
              label={t("Management")}
            />
            <FormControlLabel
              value="Non Management"
              control={<Radio />}
              label={t("nonManagement")}
            />
          </RadioGroup>
          <SeniorityMenu />
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
            {t("addsParticipantBtn")}
          </Button>
        </form>
      </Box>
    </LocalizationProvider>
  );
};

export default AddParticipantModal;

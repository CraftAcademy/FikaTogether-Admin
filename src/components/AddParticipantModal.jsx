import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import {
  Button,
  FormControlLabel,
  FormLabel,
  Modal,
  Box,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterDayjs";
import SeniorityMenu from "./SeniorityMenu";
import { Participants } from "../modules/participants";

const AddParticipantModal = ({ open, setOpen }) => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const dateRef = useRef("");
  const [management, setManagement] = useState();
  const [seniority, setSeniority] = useState("");
  const { participantList } = useSelector((state) => state);
  const { t } = useTranslation();

  const handleSubmit = () => {
    const participant = {
      participant: {
        name: nameRef.current.value,
        email: emailRef.current.value,
        start_date: dateRef.current.value,
        management: management,
        seniority: seniority,
        department: participantList.department,
      },
    };
    Participants.create(participant);
    setOpen(false);
  };

  const handleManagement = (event) => {
    setManagement(event.target.value);
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
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={open}
      >
        <Box
          data-cy="add-participant-form"
          sx={style}
          component="form"
          onSubmit={handleSubmit}
        >
          <TextField
            data-cy="name-input"
            label={t("inputNameLabel")}
            variant="outlined"
            margin="dense"
            inputRef={nameRef}
            fullWidth={true}
          />
          <TextField
            data-cy="email-input"
            label={t("email")}
            variant="outlined"
            margin="dense"
            inputRef={emailRef}
            fullWidth={true}
          />
          <div data-cy="start-date-input">
            <DesktopDatePicker
              label={t("InputStartDate")}
              onChange={() => {}}
              renderInput={(params) => (
                <TextField {...params} inputRef={dateRef} />
              )}
            />
          </div>
          <FormLabel component="legend">{t("selectManagementLabel")}</FormLabel>
          <RadioGroup
            onChange={handleManagement}
            row
            aria-label={t("selectManagementLabel")}
            defaultValue="Non Management"
            data-cy="management"
          >
            <FormControlLabel
              value="Management"
              control={<Radio />}
              label={t("selectManagementLabel")}
            />
            <FormControlLabel
              value="Non Management"
              control={<Radio />}
              label={t("nonManagement")}
            />
          </RadioGroup>
          <SeniorityMenu seniority={seniority} setSeniority={setSeniority} />
          <Button
            data-cy="add-btn"
            type="submit"
            variant="contained"
            margin="dense"
            fullWidth={true}
            sx={{
              backgroundColor: "#4C9074",
              m: 2,
            }}
          >
            {t("addsParticipantBtn")}
          </Button>
        </Box>
      </Modal>
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
        />
      </div>
    </LocalizationProvider>
  );
};

export default AddParticipantModal;

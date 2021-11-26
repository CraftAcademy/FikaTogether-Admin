import React, { useState } from "react";
import DateAdapter from "@mui/lab/AdapterDayjs";
import { TimePicker, DatePicker, LocalizationProvider } from "@mui/lab";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import "dayjs/locale/en-gb";

const FikaDateTime = ({ setDisabled }) => {
  const [fikaDate, setFikaDate] = useState(Date.now());
  const [fikaTime, setFikaTime] = useState(Date.now());
  const [fikaDateInput, setFikaDateInput] = useState("");
  const [fikaTimeInput, setFikaTimeInput] = useState("");
  const { t } = useTranslation();

  const handleChange = () => {
    if (
      /^[0-3]?[0-9]\/[0-1]?[0-9]\/[1-2][0-9]{3}$/.test(fikaDateInput) &&
      /^[0-2][0-9]:[0-5]$/.test(fikaTimeInput)
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <LocalizationProvider dateAdapter={DateAdapter} locale={"en-gb"}>
      <div data-cy="date-fika">
        <DatePicker
          label={t("chooseDate")}
          type="date"
          value={fikaDate}
          renderInput={(props) => <TextField {...props} />}
          onChange={(newValue, data) => {
            setFikaDate(newValue);
            setFikaDateInput(data);
            handleChange();
          }}
          onAccept={() => {
            setDisabled(false);
          }}
        />
      </div>
      <div data-cy="time-fika">
        <TimePicker
          ampm={false}
          value={fikaTimeInput}
          renderInput={(props) => <TextField {...props} />}
          label={t("chooseTime")}
          type="time"
          onChange={(newValue, data) => {
            setFikaTime(newValue);
            setFikaTimeInput(data);
            handleChange();
          }}
          onAccept={() => {
            setDisabled(false);
          }}
        />
  
      </div>
    </LocalizationProvider>
  );
};

export default FikaDateTime;

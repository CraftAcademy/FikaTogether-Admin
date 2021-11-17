import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import DateAdapter from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import "dayjs/locale/fr";

const FikaDateTime = ({ setDisabled }) => {
  const [value, setValue] = useState(new Date());

  const handleChange = () => {
    if (/^[0-2][0-9]\/[1?][1-9]\/[1-9][0-9]{3} [0-2][0-9]:[0-5][0-9]$/.test(value)) {
      setDisabled(true)
    }

  }

  return (
    <LocalizationProvider dateAdapter={DateAdapter} locale={"fr"}>
      <div data-cy="date-time-fika">
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          ampm={false}
          label="Choose next Fika"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
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

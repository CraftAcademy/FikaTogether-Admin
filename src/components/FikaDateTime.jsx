import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import DateAdapter from "@mui/lab/AdapterDayjs";
import { DateTimePicker, LocalizationProvider } from "@mui/lab";
import "dayjs/locale/fr";

const FikaDateTime = ({ setDisabled }) => {
  const [fikaDate, setFikaDate] = useState("");

  const handleChange = (data) => {
    if (
      /^[0-2][0-9]\/[0-1?][1-9]\/[1-9][0-9]{3} [0-2][0-9]:[0-5][0-9]$/.test(
        data
      )
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <LocalizationProvider dateAdapter={DateAdapter} locale={"fr"}>
      <div data-cy="date-time-fika">
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          ampm={false}
          label="Choose next Fika"
          value={fikaDate}
          onChange={(newValue, data) => {
            setFikaDate(newValue);
            handleChange(data);
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

import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
import DateAdapter from "@mui/lab/AdapterDayjs";
import { TimePicker, DatePicker, LocalizationProvider } from "@mui/lab";
import { TextField } from "@mui/material";
import "dayjs/locale/en-gb";

const FikaDateTime = ({ setDisabled }) => {
  const [fikaDate, setFikaDate] = useState("");
  const [fikaTime, setFikaTime] = useState("");

  const handleChange = () => {
    if (      
      /^[0-3]?[0-9]\/[0-1]?[0-9]\/[1-2][0-9]{3}$/.test(fikaDate) &&
      /^[0-2][0-9]:[0-5][0-9]$/.test(fikaTime)
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
          label="Pick a date"
          type="date"
          value={fikaDate}
          renderInput={(props) => <TextField {...props} />}
          onChange={(newValue, data) => {
            setFikaDate(newValue);
            handleChange();
          }}
        />
      </div>
      <div data-cy="time-fika">
        <TimePicker
          ampm={false}
          value={fikaTime}
          renderInput={(props) => <TextField {...props} />}
          label="Choose time"
          type="time"
          onChange={(newValue, data) => {
            setFikaTime(newValue);
            handleChange();
          }}
        />
      </div>

      {/* <div data-cy="date-time-fika">
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
      </div> */}
    </LocalizationProvider>
  );
};

export default FikaDateTime;

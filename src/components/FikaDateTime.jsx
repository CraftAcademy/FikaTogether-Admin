import React, { useState } from "react";
import { TextField } from "@mui/material";
import { DateTimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateAdapter from "@mui/lab/AdapterDayjs";

const FikaDateTime = () => {
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        id="datetime-local"
        ampm={false}
        data-cy="date-time-fika"
        label="Choose next Fika"
        type="datetime-local"
        value={value}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    </LocalizationProvider>
  );
};

export default FikaDateTime;

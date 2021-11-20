import React from "react";
import { useTranslation } from "react-i18next";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SeniorityMenu = ({ seniority, setSeniority }) => {
  const { t } = useTranslation();

  const handleChange = (event) => {
    setSeniority(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          {t("Seniority Level")}
        </InputLabel>
        <Select
          value={seniority}
          onChange={handleChange}
          label={t("Seniority Level")}
          data-cy="seniority-level"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SeniorityMenu;

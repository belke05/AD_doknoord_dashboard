import React, { useState } from "react";
import { Checkbox, FormControlLabel } from "../modules/material";

export default function CheckBoxCustom() {
  const [isMonth, setIsMonth] = useState(false);
  return (
    <FormControlLabel
      control={
        <Checkbox
          onChange={() => {
            setIsMonth(!isMonth);
          }}
          checked={isMonth}
          value="isMonth"
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      }
      label="broodje van de maand?"
    />
  );
}

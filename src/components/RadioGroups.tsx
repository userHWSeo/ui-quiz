import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { StringLiteral } from "typescript";

export default function RowRadioButtonsGroup({
  choiceView,
  choiceValue,
  setChoiceValue,
}: {
  choiceView: string[];
  choiceValue: string;
  setChoiceValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  const changeRadioBtn = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChoiceValue(event.target.value);
  };

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="radio-buttons-group-label"
        name="radio-buttons-group"
        defaultValue=""
        value={choiceValue}
        onChange={(event) => changeRadioBtn(event)}
      >
        {choiceView.map((choice) => (
          <FormControlLabel
            value={choice}
            key={choice}
            control={
              <Radio
                sx={{
                  color: "white",
                  "&.Mui-checked": {
                    color: "white",
                  },
                }}
              />
            }
            label={choice}
            sx={{ color: "white" }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

import * as React from "react";

// MUI Components
import { styled } from "@mui/system";

// Components
import RowRadioButtonsGroup from "./RadioGroups";

const MultipleChoiceView = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "70%",
  height: "50%",
});

export default function MultipleChoiceComponent({
  multipleChoiceArr,
  choiceValue,
  setChoiceValue,
}: {
  multipleChoiceArr: string[];
  choiceValue: string;
  setChoiceValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <MultipleChoiceView>
      <RowRadioButtonsGroup
        choiceView={multipleChoiceArr}
        choiceValue={choiceValue}
        setChoiceValue={setChoiceValue}
      />
    </MultipleChoiceView>
  );
}

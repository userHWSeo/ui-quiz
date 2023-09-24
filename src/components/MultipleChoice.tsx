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
  answer,
}: {
  multipleChoiceArr: string[];
  answer: string;
}) {
  return (
    <MultipleChoiceView>
      <RowRadioButtonsGroup choiceView={multipleChoiceArr} />
    </MultipleChoiceView>
  );
}

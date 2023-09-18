import * as React from "react";

// MUI Components
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import { styled } from "@mui/system";

// Func
import { findRandomComponent, multipleChoice } from "../function/index";

// Components
import MultipleChoiceComponent from "./MultipleChoice";

const MainPaper = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  height: "80%",
  borderRadius: "2rem",
  padding: "2rem",
  background:
    "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box",
});

const ComponentCard = styled(Card)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "70%",
  height: "50%",
  padding: "1rem",
});

export default function SimplePaper() {
  const currentQuestion = findRandomComponent();
  const multipleChoiceArr: string[] = multipleChoice(currentQuestion);
  const answer = multipleChoiceArr.filter(
    (choice) => currentQuestion.name === choice
  )[0];

  return (
    <MainPaper>
      <ComponentCard>{currentQuestion.component}</ComponentCard>
      <MultipleChoiceComponent
        multipleChoiceArr={multipleChoiceArr}
        answer={answer}
      />
    </MainPaper>
  );
}

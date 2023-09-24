import React, { useState, useEffect } from "react";

// MUI Components
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

// Func
import { questionModelList } from "../function/index";

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

const StepButton = styled(Button)(({ step }: { step: string }) => ({
  width: "5rem",
  height: "3rem",
  color: "white",
  backgroundColor:
    step === "next"
      ? "green"
      : step === "prev"
      ? "red"
      : step === "submit"
      ? "#ffae00"
      : "none",
}));
const StepButtonWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "80%",
});

export default function SimplePaper() {
  const TOTAL_QUESTION_COUNT = 4;
  const questionList = questionModelList();
  const [currentQuestionCount, setCurrentQuestionCount] = useState(0);

  const clickStepButton = (step: string) => {
    if (step === "prev") return setCurrentQuestionCount((prev) => prev - 1);
    if (step === "next") return setCurrentQuestionCount((prev) => prev + 1);
  };

  return (
    <MainPaper>
      <ComponentCard>
        {questionList[currentQuestionCount].component}
      </ComponentCard>
      <MultipleChoiceComponent
        multipleChoiceArr={questionList[currentQuestionCount].view}
        answer={questionList[currentQuestionCount].name}
      />
      <StepButtonWrapper>
        {currentQuestionCount !== 0 ? (
          <StepButton step="prev" onClick={() => clickStepButton("prev")}>
            Prev
          </StepButton>
        ) : (
          <div></div>
        )}
        {currentQuestionCount !== TOTAL_QUESTION_COUNT ? (
          <StepButton step="next" onClick={() => clickStepButton("next")}>
            Next
          </StepButton>
        ) : (
          <StepButton step="submit">Submit</StepButton>
        )}
      </StepButtonWrapper>
    </MainPaper>
  );
}

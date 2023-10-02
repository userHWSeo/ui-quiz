import React, { useState } from "react";
import { Link } from "react-router-dom";

// MUI Components
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

// Func
import { questionModelList } from "../function/index";

// Components
import MultipleChoiceComponent from "../components/MultipleChoice";
import ScoreView from "../components/ScoreView";

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

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "white",
});

const questionList = questionModelList();
const answerList = questionList.map((question) => question.name);
const userChoiceList: string[] = [];

export default function SimplePaper() {
  const TOTAL_QUESTION_COUNT = 4;
  const [currentQuestionCount, setCurrentQuestionCount] = useState<number>(0);
  const [choiceValue, setChoiceValue] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [submitToggle, setSubmitToggle] = useState<boolean>(false);

  const clickSubmitButton = (
    userChoiceList: string[],
    answerList: string[]
  ): void => {
    let correctAnswerNum = 0;
    userChoiceList.forEach((_, index) => {
      if (userChoiceList[index] === answerList[index]) {
        correctAnswerNum++;
      }
    });

    setScore(correctAnswerNum);
    setSubmitToggle(true);
  };

  const clickStepButton = (step: string) => {
    setChoiceValue("");
    userChoiceList[currentQuestionCount] = choiceValue;
    if (step === "prev") {
      return setCurrentQuestionCount((prev) => prev - 1);
    }
    if (step === "next") {
      return setCurrentQuestionCount((prev) => prev + 1);
    }
    if (step === "submit") return clickSubmitButton(userChoiceList, answerList);
    return console.log("clickStepButton Error");
  };

  console.log(userChoiceList);
  console.log(answerList);

  if (submitToggle) {
    return <ScoreView score={score} />;
  }

  return (
    <MainPaper>
      <ComponentCard>
        {questionList[currentQuestionCount].component}
      </ComponentCard>
      <MultipleChoiceComponent
        multipleChoiceArr={questionList[currentQuestionCount].view}
        setChoiceValue={setChoiceValue}
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
          <StepButton step="submit" onClick={() => clickStepButton("submit")}>
            Submit
          </StepButton>
        )}
      </StepButtonWrapper>
    </MainPaper>
  );
}

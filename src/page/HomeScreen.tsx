import React, { useState } from "react";
import { Link } from "react-router-dom";

// MUI Components
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

// Components
import TextAnimation from "../components/TextAnimation";

const MainPaper = styled(Paper)({
  display: "flex",
  gap: "12rem",
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

const StepButton = styled(Button)({
  width: "8rem",
  height: "4rem",
  color: "white",
  fontSize: "1.2rem",
  backgroundColor: "orange",
});

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "white",
});

export default function HomeScreen() {
  return (
    <MainPaper>
      <TextAnimation text="Welcome to MUI Quiz 🎩"></TextAnimation>
      <StepButton>
        <StyledLink to="/quiz">Play Quiz</StyledLink>
      </StepButton>
    </MainPaper>
  );
}

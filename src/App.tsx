import React from "react";
import QuestionCard from "./components/QuestionCard";
import { findRandomComponent, multipleChoice } from "./function/index";
import { Reset } from "styled-reset";
import { styled } from "@mui/system";

const AppBackground = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#10154b",
});

function App() {
  return (
    <AppBackground className="App">
      <Reset />
      <QuestionCard />
    </AppBackground>
  );
}

export default App;

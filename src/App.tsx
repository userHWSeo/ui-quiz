import { HashRouter, Routes, Route } from "react-router-dom";

import QuestionCard from "./page/QuestionCard";
import HomeScreen from "./page/HomeScreen";
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
    <HashRouter>
      <AppBackground className="App">
        <Reset />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/quiz" element={<QuestionCard />} />
        </Routes>
      </AppBackground>
    </HashRouter>
  );
}

export default App;

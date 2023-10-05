import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    <AppBackground className="App">
      <div>TEST2</div>
      <BrowserRouter>
        <Reset />
        <Routes>
          <Route path={process.env.PUBLIC_URL + "/"} element={<HomeScreen />} />
          <Route
            path={process.env.PUBLIC_URL + "/quiz"}
            element={<QuestionCard />}
          />
        </Routes>
      </BrowserRouter>
    </AppBackground>
  );
}

export default App;

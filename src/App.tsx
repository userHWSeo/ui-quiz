import React from "react";
import { findRandomComponent, multipleChoice } from "./function/index";

function App() {
  const randomCompoenet = findRandomComponent();
  console.log(randomCompoenet);
  console.log(multipleChoice(randomCompoenet));
  return <div className="App"></div>;
}

export default App;

import React from "react";
import Planetarium from "./Planetarium.js";
import DateChooser from "./DatePicker";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Planetarium/>
      <DateChooser/>
    </div>
  );
}

export default App;

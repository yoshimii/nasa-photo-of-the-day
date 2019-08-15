import React from "react";
import Planetarium from "./Planetarium.js";
import DateChooser from "./DatePicker";
import "./App.css";
import { createGlobalStyle } from 'styled-components'
import MyForm from "./Calendar"
const GlobalStyle = createGlobalStyle`
  body {
    background: black;
  }
`


function App() {

  return (
    <div className="App">
        <>
  <GlobalStyle />
</>
      <MyForm/>
      <DateChooser/>
      <Planetarium/>
      
    </div>
  );
}

export default App;

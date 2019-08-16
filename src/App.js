import React from "react";
import Planetarium from "./Planetarium.js";
import "./App.css";
import { createGlobalStyle } from 'styled-components'
import MyForm from "./Calendar"
const GlobalStyle = createGlobalStyle`
  .App {
    background: linear-gradient(#e66465, #9198e5);
  }

`


function App() {

  return (
    <div className="App">
        <>
  <GlobalStyle />
</>
      
<MyForm/>
      <Planetarium/>
      
    </div>
  );
}

export default App;

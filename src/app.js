"use strict";

import React, { Component } from "react";
import Title from "./Title";
import Square from "./Square";
import Button from "./Button";

class App extends Component {
  render() {
    return (
      <div className="container" onClick={() => alert("clicou")}>
        <Title />
        <Square />
        <Button>Botao doidao</Button>
      </div>
    );
  }
}

export default App;

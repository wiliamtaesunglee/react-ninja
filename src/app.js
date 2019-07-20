"use strict";

import React, { Component } from "react";
import Square from "./Square";
import Button from "./Button";

class App extends Component {
  constructor() {
    super(); //possibilita o uso do setState() o qual atualiza a rederizacao quando o estado é transformada/alterado
    this.state = {
      color: "green"
    };
  }
  render() {
    return (
      <div>
        <Square color={this.state.color} />

        {["red", "green", "blue"].map(color => (
          <Button key={color} handleClick={() => this.setState({ color })}>
            {color}
          </Button>
        ))}
      </div>
    );
  }
}

export default App;

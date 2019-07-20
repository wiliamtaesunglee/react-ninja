"use strict";

import React, { Component } from "react";
import Square from "./Square";
import Button from "./Button";
import Timer from "./Timer";

class App extends Component {
  constructor() {
    console.log("contructor");
    super(); //possibilita o uso do setState() o qual atualiza a rederizacao quando o estado é transformada/alterado
    this.state = {
      time: 0,
      showTimer: true
    };
  }

  render() {
    console.log("render");
    return (
      <div>
        <Square color={this.state.color} />
        {["red", "green", "blue"].map(color => (
          <Button key={color} handleClick={() => this.setState({ color })}>
            {color}
          </Button>
        ))}
        <Timer time={this.state.time} />
        <button onClick={() => this.setState({ time: this.state.time + 1 })}>
          Change Props
        </button>
      </div>
    );
  }
}

export default App;

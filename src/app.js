"use strict";

import React, { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "1"
    };
  }
  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log("event", e);
          }}
          onChange={e => {
            console.log("name", e.target.name);
            console.log("value", e.target.value);
          }}
        >
          <input typpe="name" name="name" />
          <input type="value" name="value" />
          <textarea defaultValue={"textarea\nvalue"} />
          <button>Enbiar</button>
        </form>
      </div>
    );
  }
}

export default App;

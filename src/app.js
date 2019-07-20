"use strict";

import React, { Component } from "react";
import Title from "./Title";
import Square from "./Square";
import SearchButton from "./SearchButton";
import LikeButton from "./LikeButton";

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Square />
        <LikeButton />
        <SearchButton />
      </div>
    );
  }
}

export default App;

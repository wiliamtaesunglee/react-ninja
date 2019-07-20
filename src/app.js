"use strict";

import React, { Component } from "react";
// import Title from "./Title";
import Square from "./Square";

// const App = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <Title />
//       </div>
//     );
//   }
// });

class App extends Component {
  render() {
    return (
      <div className="container">
        {["blue", "pink", "black"].map(elem => (
          <Square key={elem} color={elem} />
        ))}
      </div>
    );
  }
}

export default App;

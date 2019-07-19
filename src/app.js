"use strict";

import React, { Component } from "react";
import Title from "./Title";

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
        <Title name="dizzie" />
      </div>
    );
  }
}

export default App;

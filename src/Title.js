"use strict";

import React from "react";

const Title = React.createClass({
  getDefaultProps: function() {
    return {
      name: "Desconhecido",
      lastName: "No Last Name"
    };
  },
  render: function() {
    return (
      <div>
        <h1>
          Não sei se tá rolando, {this.props.name + " " + this.props.lastName}
        </h1>
      </div>
    );
  }
});

export default Title;

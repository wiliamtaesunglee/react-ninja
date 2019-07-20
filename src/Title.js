"use strict";

import React from "react";

const Title = props => (
  <div>
    <h1>Helo {`${props.name} ${props.lastName}!!`}!</h1>
  </div>
);

Title.defaultProps = {
  name: "This is ",
  lastName: "Awesome"
};

export default Title;

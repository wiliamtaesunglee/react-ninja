"use strict";

import React from "react";
import LikeButton from "./LikeButton";
import SearchButton from "./SearchButton";

const Button = ({ children, handleClick }) => (
  <button className="main-button" onClick={handleClick}>
    {children}
  </button>
);

export default Button;

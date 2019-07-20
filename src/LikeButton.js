"use strict";

import React from "react";
import Button from "./Button";

const LikeButton = () => (
  <Button handleClick={() => alert("liked")}>Like</Button>
);

export default LikeButton;

"use strict";

import React, { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: 0
    };
    this.timer;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", this.state, nextState);
    return this.state.time != nextState.time;
  }

  componentWillReceiveProps(nextProps) {
    console.log("componenWillReceiveProps", this.props, nextProps);
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.setState({ time: this.state.time + 1 }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <div>Timer : {this.state.time}</div>;
  }
}

export default Timer;

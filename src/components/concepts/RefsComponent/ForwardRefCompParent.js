import React, { Component } from "react";
import { Button } from "@mui/material";
import ForwardRefCompChild from "./ForwardRefCompChild";

class ForwardRefCompParent extends Component {
  constructor() {
    super();

    this.inputRef = React.createRef();
  }

  handleClick = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <React.Fragment>
        <ForwardRefCompChild ref={this.inputRef} />
        <Button onClick={this.handleClick}>Click me</Button>
      </React.Fragment>
    );
  }
}

export default ForwardRefCompParent;

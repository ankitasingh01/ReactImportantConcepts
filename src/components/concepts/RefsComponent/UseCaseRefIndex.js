import React, { Component } from "react";
import Button from "@mui/material/Button";
import UseCaseRef1 from "./UseCaseRef1";

class UseCaseRefIndex extends Component {
  constructor(props) {
    super(props);

    this.componentRef = React.createRef();
  }

  clickHandler = () => {
    this.componentRef.current.focusHandler();
  };

  render() {
    return (
      <React.Fragment>
        <UseCaseRef1 ref={this.componentRef} />
        <Button variant="contained" size="small" onClick={this.clickHandler}>
          click Me
        </Button>
      </React.Fragment>
    );
  }
}

export default UseCaseRefIndex;

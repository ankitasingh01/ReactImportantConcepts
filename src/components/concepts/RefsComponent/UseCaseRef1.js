import React, { Component } from "react";

class UseCaseRef1 extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  focusHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <React.Fragment>
        <input type="text" ref={this.inputRef} />
      </React.Fragment>
    );
  }
}

export default UseCaseRef1;

import React, { Component } from "react";

class CallBackRef extends Component {
  constructor(props) {
    super(props);

    this.cbRef = null;

    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    console.log("this.cbRef", this.cbRef);
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  render() {
    return (
      <React.Fragment>
        <input type="text" ref={this.setCbRef} />
      </React.Fragment>
    );
  }
}

export default CallBackRef;

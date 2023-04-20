import React, { Component } from "react";
// import ErrorBoundary from "./ErrorBoundary";
import ErrorBoundary from ".";
import ErrorComp from "./ErrorComp";

class ErrorParentComp extends Component {
  render() {
    return (
      <React.Fragment>
        <ErrorBoundary>
          <ErrorComp name="Maruti" />
        </ErrorBoundary>
        <ErrorBoundary>
          <ErrorComp name="Marry" />
        </ErrorBoundary>
        <ErrorBoundary>
          <ErrorComp name="Johnny" />
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}
export default ErrorParentComp;

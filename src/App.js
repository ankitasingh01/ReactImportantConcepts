import React, { Component } from "react";
import HOCUseCaseCounter from "./components/HOCUseCaseCounter";
import ErrorParentComp from "./components/ErrorBoundary/ErrorParentComp";
import PortalComponent from "./components/PortalComponent";
import RefsComponent from "./components/RefsComponent";
import RenderPropsComponent from "./components/RenderPropsComponent";
import FormComp from "./components/FormComp/FormComp";

class App extends Component {
  componentDidMount() {
    console.log("componentDidMount Lifecycle App");
  }

  render() {
    return (
      <React.Fragment>
        {/* <RenderPropsComponent /> */}
        {/* <HOCUseCaseCounter /> */}
        {/* <ErrorParentComp /> */}
        {/* <PortalComponent /> */}
        {/* <RefsComponent /> */}
        {/* <FormComp /> */}
      </React.Fragment>
    );
  }
}

export default App;

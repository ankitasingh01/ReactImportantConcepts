import React, { Component } from "react";
import HOCUseCaseCounter from "./components/concepts/HOCUseCaseCounter";
import ErrorParentComp from "./components/concepts/ErrorBoundary/ErrorParentComp";
import PortalComponent from "./components/concepts/PortalComponent";
import RefsComponent from "./components/concepts/RefsComponent";
import RenderPropsComponent from "./components/concepts/RenderPropsComponent";
import FormComp from "./components/concepts/FormComp/FormComp";
import UseContextComponent from "./components/UseContextComponent";

class App extends Component {
  componentDidMount() {
    console.log("componentDidMount Lifecycle App");
  }

  render() {
    return (
      <React.Fragment>
        <UseContextComponent />
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

import React from "react";
import ChangeCounter from "./ChangeCounter";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

const HOCUseCaseCounter = () => {
  return (
    <React.Fragment>
      {/* if you are passing any prop in component from here it will go to HOC common component
        you cannot use it directly within these below component
        pass it from CounterHOC then only you will be able to use it */}
      <ClickCounter name="Ankita" />
      <HoverCounter />
      <ChangeCounter />
    </React.Fragment>
  );
};
export default HOCUseCaseCounter;

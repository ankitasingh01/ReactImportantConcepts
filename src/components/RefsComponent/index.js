import React from "react";
import CallBackRef from "./CallBackRef";
import ForwardRefCompParent from "./ForwardRefCompParent";
import PlainRef from "./PlainRef";
import UseCaseRefIndex from "./UseCaseRefIndex";

const RefsComponent = () => {
  return (
    <React.Fragment>
      <ForwardRefCompParent />
      {/* <UseCaseRefIndex /> */}
      {/* <PlainRef /> */}
      {/* <CallBackRef /> */}
    </React.Fragment>
  );
};
export default RefsComponent;

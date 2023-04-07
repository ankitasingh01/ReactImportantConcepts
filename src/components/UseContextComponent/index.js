import React from "react";
import { UserContextProvider } from "./context/UserContextProvider";
import SampleA from "./SampleCompnents/SampleA";
import SampleB from "./SampleCompnents/SampleB";
import SampleC from "./SampleCompnents/SampleC";

const UseContextComponent = () => {
  return (
    <UserContextProvider>
      {/* <SampleA /> */}
      {/* {/* <SampleB /> */}
      <SampleC />
    </UserContextProvider>
  );
};
export default UseContextComponent;

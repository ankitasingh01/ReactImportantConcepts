import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/UserContextProvider";
import HeaderComponent from "./HeaderComponent";
import SampleA from "./SampleCompnents/SampleA";
import SampleB from "./SampleCompnents/SampleB";
import SampleC from "./SampleCompnents/SampleC";
import SampleFormDataClassBased from "./SampleCompnents/SampleFormDataClassBased";
const UseContextComponent = () => {
  return (
    <UserContextProvider>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<SampleA />} />
        <Route path="/signup" element={<SampleC />} />
        <Route path="/table" element={<SampleFormDataClassBased />} />
      </Routes>
    </UserContextProvider>
  );
};
export default UseContextComponent;

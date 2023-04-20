import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/UserContextProvider";
import HeaderComponent from "./HeaderComponent";
import SampleA from "./SampleCompnents/SampleA";
import SampleB from "./SampleCompnents/SampleB";
import SampleC from "./SampleCompnents/SampleC";
import SampleFormDataClassBased from "./SampleCompnents/SampleFormDataClassBased";
import SamplePexelsAPI from "./SampleCompnents/PexelsComponent/SamplePexelsAPI";
import PexelsComponent from "./SampleCompnents/PexelsComponent";
import { ImagesContextProvider } from "./context/ImagesContextProvider";
const UseContextComponent = () => {
  // Rating everyone style and purchasing clothes
  // keep two pages one for admin to upload and other for customersto view the store
  return (
    <UserContextProvider>
      <ImagesContextProvider>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<SampleA />} />
          <Route path="/signup" element={<SampleC />} />
          <Route path="/followers" element={<SampleFormDataClassBased />} />
          <Route path="/store-collection" element={<PexelsComponent />} />
          {/* <Route path="/allCards" element={<SampleMaterialUICard />} /> */}
        </Routes>
      </ImagesContextProvider>
    </UserContextProvider>
  );
};
export default UseContextComponent;

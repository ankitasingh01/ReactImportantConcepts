import React, { useEffect, useState } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";

const ParentComp = () => {
  const [allData, setAllData] = useState("Rahul");

  //   useEffect(() => {
  //   setInterval(() => {
  //     setAllData("Rahul");
  //     console.log("ParentComp");
  //   }, 2000);

  //   }, []);

  return (
    <React.Fragment>
      {/* <PureComp allData={allData} /> */}
      <MemoComp allData={allData} />
    </React.Fragment>
  );
};
export default ParentComp;

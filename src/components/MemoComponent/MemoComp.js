import React from "react";

const MemoComp = ({ allData }) => {
  console.log(allData, "allDAta Memo");
  return <h1>{allData}</h1>;
};

export default React.memo(MemoComp);

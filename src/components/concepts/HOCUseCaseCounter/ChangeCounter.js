import React from "react";
import CounterHOC from "../../../common/HOCs/CounterHOC";

const ChangeCounter = (props) => {
  const { count, increaseCount } = props;
  return (
    <div>
      <input onChange={increaseCount} />
      <p>ChangeCounter on input Enter the input and check count{count}</p>
    </div>
  );
};
export default CounterHOC(ChangeCounter);

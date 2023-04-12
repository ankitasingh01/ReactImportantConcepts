import React from "react";
import CounterHOC from "../../../common/HOCs/CounterHOC";

const ClickCounter = (props) => {
  const { count, increaseCount, name } = props;
  console.log("name", name);
  return (
    <div>
      <button onClick={increaseCount}>
        Click me and check the counter{count}
      </button>
    </div>
  );
};
export default CounterHOC(ClickCounter, 5);

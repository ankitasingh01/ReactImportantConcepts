import React from "react";
import CounterHOC from "../../common/HOCs/CounterHOC";

const HoverCounter = (props) => {
  const { count, increaseCount } = props;
  return (
    <div>
      <p onMouseOver={increaseCount}>
        Hover over me and check the counter{count}
      </p>
    </div>
  );
};
export default CounterHOC(HoverCounter);

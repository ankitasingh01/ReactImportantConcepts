import React from "react";
const RenderCompChild = (props) => {
  const { count, incrementCount } = props;
  return (
    <div>
      <button onClick={incrementCount}>Click Me</button>
      <p>Count {count}</p>
    </div>
  );
};
export default RenderCompChild;

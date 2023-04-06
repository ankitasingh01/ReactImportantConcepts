import React from "react";

const ForwardRefCompChild = React.forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

export default ForwardRefCompChild;

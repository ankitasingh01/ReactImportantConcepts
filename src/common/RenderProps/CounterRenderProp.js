import React, { useState } from "react";

const CounterRenderProp = (props) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  //   return props.children(count, incrementCount); check RenderPropsComponent index.jss

  return props.render(count, incrementCount);
};
export default CounterRenderProp;

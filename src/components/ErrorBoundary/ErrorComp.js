import React, { useEffect } from "react";
const ErrorComp = (props) => {
  //   useEffect(() => {
  if (props.name === "Johnny") {
    throw new Error("Not a hero");
  }
  //   }, []);

  return <div>ErrorComp {props.name}</div>;
};
export default ErrorComp;

import CounterRenderProp from "../../../common/RenderProps/CounterRenderProp";
import RenderCompChild from "./RenderCompChild";
import React from "react";
// Example of Render Prop

const RenderPropsComponent = () => {
  return (
    <React.Fragment>
      <CounterRenderProp
        render={(count, incrementCount) => (
          <RenderCompChild count={count} incrementCount={incrementCount} />
        )}
      />
      {/* <CounterRenderProp>
        {(count, incrementCount) => (
          <RenderCompChild count={count} incrementCount={incrementCount} />
        )}
      </CounterRenderProp> */}
      {/* return props.children(count, incrementCount) in the CounterRenderProp */}
    </React.Fragment>
  );
};
export default RenderPropsComponent;

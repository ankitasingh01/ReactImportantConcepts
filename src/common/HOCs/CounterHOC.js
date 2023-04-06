import React from "react";

// suppose if you want to pass another prop with the Original component
// eg a number which gets added to the count on click

const CounterHOC = (OriginalComponent, newAddedCounter) => {
  class CounterHOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    increaseCount = () => {
      this.setState(
        (prevState) => {
          return {
            count: prevState.count + newAddedCounter,
          };
        },
        () => {
          console.log("this.state.count", this.state.count);
        }
      );
    };
    render() {
      return (
        <OriginalComponent
          increaseCount={this.increaseCount}
          count={this.state.count}
          {...this.props}
        />
      );
    }
  }
  return CounterHOC;
};
export default CounterHOC;

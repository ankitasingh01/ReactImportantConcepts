import React, { Component } from "react";

class LifeCycleMethods extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Hello Lifecycle A");
    return {
      username: props.name
    };
    //setState not working you just have to return the new state
  }

  componentDidMount() {
    console.log("Child mount Mounted Lifecycle A");
  }

  shouldComponentUpdate(nextProps) {
    console.log("Should component Update Lifecycle A");
    console.log(nextProps.language, this.props.language);
    if (nextProps.language !== this.props.language) {
      console.log("Entering");
      return true;
    } else return false;
  }

  render() {
    console.log("Render LifeCycleA");
    const { username } = this.state;
    return (
      <div>
        <h1>Hello World</h1>
        <h2>{this.state.username}</h2>
      </div>
    );
  }
}

export default LifeCycleMethods;

import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

class PlainRef extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    console.log("this.inputRef", this.inputRef);
    this.inputRef.current.focus();
  }

  render() {
    return (
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <input type="text" ref={this.inputRef} />
        {/* <TextField
          id="outlined-basic"
          //   label="Outlined"
          variant="outlined"
          ref={this.inputRef}
        /> */}
        {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
        {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
      </Box>
    );
  }
}

export default PlainRef;

import React, { Component } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { UserContext } from "../context/UserContextProvider";

export class SampleFormDataClassBased extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <UserContext.Consumer>
        {(allData) => (
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Serial No</TableCell>
                  <TableCell align="right">Title</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allData.postData.map((elem) => (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {elem.id}
                    </TableCell>
                    <TableCell align="right">{elem.title}</TableCell>
                    <TableCell align="right">{elem.body}</TableCell>
                    <TableCell align="right">sdf</TableCell>
                    <TableCell align="right">sdfds</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </UserContext.Consumer>
    );
  }
}

export default SampleFormDataClassBased;

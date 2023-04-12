import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import { UserContext } from "../context/UserContextProvider";
import { Grid, Backdrop, CircularProgress } from "@mui/material";
import SampleB from "./SampleB";
const SampleA = () => {
  const { postData, loading, error } = useContext(UserContext);
  console.log("postData, loading, error", postData, loading, error);
  // My card preferences

  return (
    <React.Fragment>
      <Outlet />
      {loading && !postData.length && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          //   onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Container maxWidth="xl">
        <Grid container>
          {postData.length > 0 &&
            postData.map(({ id, title, body }) => {
              return <SampleB key={id} title={title} body={body} />;
            })}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default SampleA;

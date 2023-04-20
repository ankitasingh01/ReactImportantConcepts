import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { ImagesContext } from "../../context/ImagesContextProvider";
import PexelsCard from "./PexelsCard";

const PexelsComponent = () => {
  const { pexelImages } = useContext(ImagesContext);
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        {pexelImages.photos.map((pexelImage) => (
          <PexelsCard pexelImage={pexelImage} />
        ))}
      </Grid>
    </React.Fragment>
  );
};
export default PexelsComponent;

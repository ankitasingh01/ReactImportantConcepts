import React, { useState } from "react";
import { createClient } from "pexels";
import { Button } from "@mui/material";

const client = createClient(
  "KIPeWWU6MQXHKus2KLjiYtr2zoWi4jMLb5HEeKl4PlFDvBYSgRTYiYDx"
);
const query = "Nature";

const SamplePexelsAPI = () => {
  const [pexelImages, setPexelImages] = useState();

  const handleImages = () => {
    client.photos
      .search({ query, per_page: 80 })
      .then((photos) => console.log("photos", photos));
  };

  return <Button onClick={handleImages}>Images</Button>;
};

export default SamplePexelsAPI;

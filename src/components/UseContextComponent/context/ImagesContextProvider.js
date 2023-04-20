import React, { createContext, useEffect, useState } from "react";
import { createClient } from "pexels";

export const ImagesContext = createContext(null);

const client = createClient(
  "KIPeWWU6MQXHKus2KLjiYtr2zoWi4jMLb5HEeKl4PlFDvBYSgRTYiYDx"
);
const query = "Fashion";

const initialImagesData = {
  page: 0,
  per_page: 0,
  photos: [],
};
export const ImagesContextProvider = ({ children }) => {
  const [pexelImages, setPexelImages] = useState(initialImagesData);

  const handleImages = () => {
    client.photos.search({ query, per_page: 80 }).then((photosResponse) => {
      setPexelImages((prevImage) => {
        return {
          ...prevImage,
          page: photosResponse.page,
          per_page: photosResponse.per_page,
          photos: photosResponse.photos,
        };
      });
    });
  };

  useEffect(() => {
    handleImages();
  }, []);

  console.log("pexelImages", pexelImages);
  const contextValues = {
    pexelImages,
  };

  return (
    <ImagesContext.Provider value={contextValues}>
      {children}
    </ImagesContext.Provider>
  );
};

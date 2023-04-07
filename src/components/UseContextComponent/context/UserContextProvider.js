import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const initialData = {
  postData: [],
  loading: true,
  error: false,
};

export const UserContext = createContext(initialData);

export const UserContextProvider = ({ children }) => {
  const [allData, setAllData] = useState(initialData);
  const { postData, loading, error } = allData;
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setAllData((prevState) => {
          return {
            ...prevState,
            postData: response.data,
          };
        });
      })
      .catch((error) => {
        setAllData((prevState) => {
          return {
            ...prevState,
            error: error,
          };
        });
      });
  }, []);

  console.log("allData", allData);

  const contextValues = {
    allData,
    postData,
    loading,
    error,
  };

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};

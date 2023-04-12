import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
//https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios
// For axios understanding check out the above link
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
      .all([
        axios.get("https://jsonplaceholder.typicode.com/posts"),
        axios.get("https://jsonplaceholder.typicode.com/users"),
      ])
      .then(
        axios.spread((response, newUSer) => {
          console.log("newUser", newUSer);
          setAllData((prevState) => {
            return {
              ...prevState,
              postData: response.data,
            };
          });
        })
      )
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

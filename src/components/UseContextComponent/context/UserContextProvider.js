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
  const [followers, setFollowers] = useState([]);
  const { postData, loading, error } = allData;

  const handleSubmit = (formData) => {
    console.log("formData", formData);
    const newFormData = {
      id: 11,
      name: formData.fullName,
      username: formData.username,
      email: formData.emailId,
      address: {},
      phone: 123123,
      website: formData.emailId,
      company: {},
    };

    const mergedFormData = [...followers, newFormData];

    console.log("mergedFormData", mergedFormData);

    axios
      .post("https://jsonplaceholder.typicode.com/users", mergedFormData)
      .then((response) => console.log("response", response))
      .catch((error) => console.log("error", error));
  };

  const handleFollowers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((newFollowerData) => {
        console.log("newFollower", newFollowerData);
        setFollowers([...followers, ...newFollowerData.data]);
      })
      .catch((error) => console.log("error", error));
  };

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

    handleFollowers();
  }, []);

  console.log("followers", followers);

  const contextValues = {
    handleSubmit,
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

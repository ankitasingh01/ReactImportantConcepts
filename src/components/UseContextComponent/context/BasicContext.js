import React, { createContext } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const contextValues = {
    allData,
    filteredData,
  };

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};

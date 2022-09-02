import React, { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ fname: "Dipak mandal", age: "25" }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
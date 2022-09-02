import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";


const AppContext = React.createContext();

const intialState = {
  name: "",
  image: ""

};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Dbsmandal",
        image: "./images/hero.svg",
      },
    });
  };

  const udpateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Dipak Mandal",
        image: "./images/about1.svg",
      },
    });
  };
  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
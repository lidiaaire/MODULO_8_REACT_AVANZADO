import React, { useState, createContext } from "react";

export const UserContext = createContext();

export default function GlobalState(props) {
  const [token, setToken] = useState("123456789");

  const otraFuncion = () => {
    console.log("hola");
  };

  return (
    <UserContext.Provider value={{ token, setToken, otraFuncion }}>
      {props.children}
    </UserContext.Provider>
  );
}

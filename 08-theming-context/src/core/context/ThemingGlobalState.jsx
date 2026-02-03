import React, { useState } from "react";
import ThemingContext from "./ThemingContext";

export default function ThemingGlobalState(props) {
  //Theming Values: ['dark', 'light']
  const [theming, setTheming] = useState("dark");

  const changeTheming = () => {
    if (theming == "dark") {
      setTheming("light");
    } else {
      setTheming("dark");
    }
  };

  return (
    <ThemingContext.Provider value={{ theming, changeTheming }}>
      {props.children}
    </ThemingContext.Provider>
  );
}

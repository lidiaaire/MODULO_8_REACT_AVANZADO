import React from "react";
import MyPokemonsDetailsComponent from "./MyPokemonsDetailsComponent/MyPokemonsDetailsComponent";
import { useContext } from "react";
import ThemingContext from "@/core/context/ThemingContext";

export default function MyPokemonsComponent() {
  const { theming } = useContext(ThemingContext);

  return (
    <div className={theming}>
      <h2>MyPokemonsComponent </h2>
      <MyPokemonsDetailsComponent />
    </div>
  );
}

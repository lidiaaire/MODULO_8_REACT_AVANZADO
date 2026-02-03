import React from "react";
import MyFightComponent from "./MyFightComponent/MyFightComponent";
import ThemingContext from "@/core/context/ThemingContext";
import { useContext } from "react";

export default function FightComponent() {
  const { theming } = useContext(ThemingContext);
  return (
    <div className={theming}>
      <h2>FightComponent </h2>
      <MyFightComponent />
    </div>
  );
}

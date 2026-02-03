import FightComponent from "@/components/FightComponent/FightComponent";
import MyPokemonsComponent from "@/components/MyPokemonsComponent/MyPokemonsComponent";
import SidebarComponent from "@/components/SidebarComponent/SidebarComponent";
import ThemingGlobalState from "@/core/context/ThemingGlobalState";
import React from "react";

export default function Home() {
  return (
    <ThemingGlobalState>
      <br />
      <SidebarComponent />
      <hr />
      <MyPokemonsComponent />
      <hr />
      <FightComponent />
    </ThemingGlobalState>
  );
}

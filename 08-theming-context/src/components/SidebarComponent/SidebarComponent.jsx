import ThemingContext from "@/core/context/ThemingContext";
import React, { useContext } from "react";

export default function SidebarComponent() {
  const { theming } = useContext(ThemingContext);
  return (
    <div className={theming}>
      <h2>SideBarComponent </h2>
    </div>
  );
}

import ThemingContext from "@/core/context/ThemingContext";
import React, { useContext } from "react";

export default function WinComponent() {
  const { changeTheming } = useContext(ThemingContext);
  return (
    <div>
      <h4>WinComponent </h4>
      <button
        onClick={() => {
          changeTheming();
        }}
      >
        Cambiar tema
      </button>
    </div>
  );
}

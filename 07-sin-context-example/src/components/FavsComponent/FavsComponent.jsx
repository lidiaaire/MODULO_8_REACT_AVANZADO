import React from "react";

export default function FavsComponent(props) {
  // Aqui voy a usar la variable de estado TOKEN
  return (
    <div>
      <h2>FavsComponent</h2>
      <span>{props.token}</span>
    </div>
  );
}

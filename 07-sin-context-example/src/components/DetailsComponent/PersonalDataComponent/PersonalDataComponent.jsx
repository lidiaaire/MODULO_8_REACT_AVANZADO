import React from "react";

export default function PersonalDataComponent(props) {
  // Aqui voy a usar la variable de estado TOKEN

  return (
    <div>
      <h3>PersonalDataComponent</h3>
      <span>{props.token}</span>
    </div>
  );
}

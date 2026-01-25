import React from "react";

export default function UserDetailsComponent(props) {
  const { idParam, nameParam } = props;

  const updateUserData = () => {
    console.log("Actualizando los datos del usuario con ID: ", idParam);
  };

  return (
    <div>
      <p>Id: {idParam}</p>
      <p>Nombre: {nameParam}</p>
      <button onClick={updateUserData}>Actualizar Usuario</button>
    </div>
  );
}

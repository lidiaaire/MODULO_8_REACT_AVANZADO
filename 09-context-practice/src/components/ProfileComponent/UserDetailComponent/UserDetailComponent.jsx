import UserContext from "@/core/context/UserContext";
import React, { useContext } from "react";

export default function UserDetailComponent() {
  const { usuario } = useContext(UserContext);
  // const ctx = useContext(UserContext)
  //Podriamos no hacer destructuring del ocntexto usando ctx como variable
  //ctx es la abreviatura de context

  return (
    <div>
      <h2>UserDetailComponent</h2>
      <div>
        <p>Nombre: {usuario.name}</p>
        <p>Apellidos: {usuario.surname}</p>
      </div>
    </div>
  );
}

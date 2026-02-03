import UserContext from "@/core/context/UserContext";
import React, { useContext, useState } from "react";

export default function UpdateUserDetailComponent() {
  const { updateUserProps } = useContext(UserContext);

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");

  const nombreOnChange = (e) => {
    setNombre(e.target.value);
  };

  const apellidosOnChange = (e) => {
    setApellidos(e.target.value);
  };

  const clickModifyData = () => {
    if (nombre && nombre.length > 0 && apellidos && apellidos.length > 0) {
      updateUserProps(nombre, apellidos);
    }
  };
  return (
    <div>
      <h2>UpdateUserDetailComponent</h2>
      <div className="user-modify">
        <div>
          <span>Nombre: </span>
          <input value={nombre} onChange={nombreOnChange} />
        </div>
        <div>
          <span>Apellidos: </span>
          <input value={apellidos} onChange={apellidosOnChange} />
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            clickModifyData();
          }}
        >
          Modificar Usuario
        </button>
      </div>
    </div>
  );
}

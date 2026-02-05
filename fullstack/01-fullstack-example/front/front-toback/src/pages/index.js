import React, { useEffect, useState } from "react";
import { getSaludo, postSaludo, postSaludoPersona } from "./api/myAPIFetch";

export default function Home() {
  const [saludo, setSaludo] = useState("");
  const [saludoPost, setSaludoPost] = useState("");
  const [nombre, setNombre] = useState("");
  const [saludoPersona, setSaludoPersona] = useState("");

  useEffect(() => {
    const saludoAuxFunction = async () => {
      const saludoAux = await getSaludo();
      setSaludo(saludoAux);
    };

    saludoAuxFunction();
  }, []);

  const handleOnClickPostSaludo = async () => {
    const postAux = await postSaludo();
    setSaludoPost(postAux);
  };

  const handlerOnChangeNombre = (e) => {
    setNombre(e.target.value);
  };

  const handlerOnClickSaludarAPersona = async () => {
    const auxSaludoPersona = await postSaludoPersona(nombre);
    setSaludoPersona(auxSaludoPersona);
  };

  return (
    <div>
      <h1>{saludo?.message}</h1>
      <hr />
      <h2>{saludoPost.message}</h2>
      <button onClick={handleOnClickPostSaludo}>get saludo POST</button>

      <hr />
      <div>
        <h2>Creacion saludo personalizado</h2>
        <div>
          <span>Nombre: </span>
          <input onChange={handlerOnChangeNombre} value={nombre} />
        </div>
      </div>
      <div>
        <button onClick={handlerOnClickSaludarAPersona}>
          Saludar al colegi
        </button>
      </div>
      <hr />
      <h3>{saludoPersona.message}</h3>
    </div>
  );
}

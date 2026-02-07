import React from "react";
import { useState } from "react";
import { updateDigimon } from "@/api/digimonFetch";
import { createDigimon } from "@/api/digimonFetch";

export default function CreateDigimonDetailsComponent(props) {
  const { setDigimonHasChanged, digimonHasChanged, closeDigimonCreation } =
    props;

  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [evolucion, setEvolucion] = useState("");

  const handlerOnChangeNombre = (e) => {
    setNombre(e.target.value);
  };

  const handlerOnChangeTipo = (e) => {
    setTipo(e.target.value);
  };

  const handlerOnChangeEvolucion = (e) => {
    setEvolucion(e.target.value);
  };

  const crearDigimon = async () => {
    await createDigimon({
      nombre,
      tipo,
      evolucion,
    });

    setDigimonHasChanged(!digimonHasChanged);
    closeDigimonCreation();
  };

  return (
    <div>
      <h2>Crear digimon </h2>
      <div>
        <div>
          <div>
            <span>Nombre: </span>
            <input value={nombre} onChange={handlerOnChangeNombre}></input>
          </div>
          <div>
            <span>Tipo: </span>
            <input value={tipo} onChange={handlerOnChangeTipo}></input>
          </div>
          <div>
            <span>Evolucion: </span>
            <input
              value={evolucion}
              onChange={handlerOnChangeEvolucion}
            ></input>
          </div>
          <div>
            <button onClick={crearDigimon}>Crear</button>
          </div>
        </div>
      </div>
    </div>
  );
}

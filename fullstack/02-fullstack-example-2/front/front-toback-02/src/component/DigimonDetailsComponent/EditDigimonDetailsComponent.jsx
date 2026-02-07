import React from "react";
import { useState } from "react";
import { updateDigimon } from "@/api/digimonFetch";

export default function EditDigimonDetailsComponent(props) {
  const {
    id,
    digimon,
    setDigimonHasChanged,
    digimonHasChanged,
    closeDigimonDetails,
  } = props;

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

  const guardarDigimon = async () => {
    await updateDigimon(id, {
      nombre,
      tipo,
      evolucion,
    });

    setDigimonHasChanged(!digimonHasChanged);
    closeDigimonDetails();
  };

  return (
    <div>
      <h2>Editar Digimon </h2>
      <div>
        <h2>Digimon Details | Updating </h2>
        <div>
          <div>
            <input
              value={nombre}
              onChange={handlerOnChangeNombre}
              placeholder={digimon.nombre}
            ></input>
          </div>
          <div>
            <input
              value={tipo}
              onChange={handlerOnChangeTipo}
              placeholder={digimon.tipo}
            ></input>
          </div>
          <div>
            <input
              value={evolucion}
              onChange={handlerOnChangeEvolucion}
              placeholder={digimon.evolucion}
            ></input>
          </div>
          <div>
            <button onClick={guardarDigimon}>Guardar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

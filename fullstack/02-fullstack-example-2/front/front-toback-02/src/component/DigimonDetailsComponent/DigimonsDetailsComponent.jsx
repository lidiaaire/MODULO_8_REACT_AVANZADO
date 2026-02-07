import React, { useEffect, useState } from "react";
import { deleteDigimon, getDigimon } from "@/api/digimonFetch";
import EditDigimonDetailsComponent from "./EditDigimonDetailsComponent";

export default function DigimonsDetailsComponent(props) {
  const { id, closeDigimonDetails, setDigimonHasChanged, digimonHasChanged } =
    props;
  const [digimon, setDigimon] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const loadDigimon = async () => {
      const digimonAux = await getDigimon(id);
      setDigimon(digimonAux);
    };
    loadDigimon();
  }, [id]);

  const initUpdateProcessDigimon = () => {
    setIsEditing(true);
  };

  const handlerDeleteDigimon = () => {
    deleteDigimon(id);
    setDigimonHasChanged(!digimonHasChanged);
  };

  return (
    <>
      <div>
        {!isEditing ? (
          <div>
            <h2>Digimon Details </h2>
            <div>
              <p> Nombre: {digimon.nombre} </p>
              <p> Tipo: {digimon.tipo} </p>
              <p>Evolucion: {digimon.evolucion}</p>
            </div>
            <div>
              <h4>Options</h4>
              <div>
                <button onClick={initUpdateProcessDigimon}>
                  Update Digimon
                </button>
                <button onClick={handlerDeleteDigimon}>Delete Digimon</button>
              </div>
            </div>
          </div>
        ) : (
          <EditDigimonDetailsComponent
            id={id}
            digimon={digimon}
            setDigimonHasChanged={setDigimonHasChanged}
            digimonHasChanged={digimonHasChanged}
            closeDigimonDetails={closeDigimonDetails}
          />
        )}

        <hr />
        <div>
          <button onClick={closeDigimonDetails}>Cerrar Digimons Details</button>
        </div>
      </div>
    </>
  );
}

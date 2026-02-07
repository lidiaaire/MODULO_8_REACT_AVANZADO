import { getAllDigimons } from "@/api/digimonFetch";
import DigimonsDetailsComponent from "@/component/DigimonDetailsComponent/DigimonsDetailsComponent";
import CreateDigimonDetailsComponent from "@/component/DigimonDetailsComponent/CreateDigimonDetailsComponent";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [digimons, setDigimons] = useState([]);
  const [digimonId, setDigimonId] = useState(null);
  const [digimonHasChanged, setDigimonHasChanged] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const getAllDigimonsAux = async () => {
    const digimonsAux = await getAllDigimons();
    setDigimons(digimonsAux);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getAllDigimonsAux();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getAllDigimonsAux();
    setDigimonHasChanged(false);
    // eslint-disable-next-line react-hooks/immutability
    closeDigimonDetails();
  }, [digimonHasChanged]);

  const handlerOnClick = (id) => {
    setDigimonId(id);
  };
  const closeDigimonDetails = () => {
    setDigimonId(null);
  };

  const handlerCreateDigimon = () => {
    setIsCreating(true);
  };

  const closeDigimonCreation = () => {
    setIsCreating(false);
  };

  return (
    <>
      <h1>Digimons</h1>
      <div>
        {!isCreating ? (
          <button onClick={handlerCreateDigimon}>Crear Digimon</button>
        ) : (
          <CreateDigimonDetailsComponent
            setDigimonHasChanged={setDigimonHasChanged}
            digimonHasChanged={digimonHasChanged}
            closeDigimonCreation={closeDigimonCreation}
          />
        )}
      </div>
      <br />
      {digimons &&
        digimons.map((digimon, index) => {
          return (
            <div key={index}>
              <span>{digimon.id} | </span>
              <span>{digimon.nombre} | </span>
              <span>
                <button
                  onClick={() => {
                    handlerOnClick(digimon.id);
                  }}
                >
                  Ver Digimon
                </button>
              </span>
            </div>
          );
        })}
      {digimonId && (
        <DigimonsDetailsComponent
          id={digimonId}
          closeDigimonDetails={closeDigimonDetails}
          setDigimonHasChanged={setDigimonHasChanged}
          digimonHasChanged={digimonHasChanged}
        />
      )}
    </>
  );
}

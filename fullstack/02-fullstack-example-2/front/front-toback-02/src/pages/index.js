import { getAllDigimons } from "@/api/digimonFetch";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [digimons, setDigimons] = useState([]);

  useEffect(() => {
    const getAllDigimonsAux = async () => {
      const digimonsAux = await getAllDigimons();
      console.log("PRIMER DIGIMON:", digimonsAux.digimons[0]);

      setDigimons(digimonsAux.digimons);
    };
    getAllDigimonsAux();
  }, []);

  return (
    <>
      <h1>Digimons</h1>
      {digimons.map((digimon) => (
        <div key={digimon.id}>
          <p>Nombre: {digimon.nombre}</p>
          <p>Tipo: {digimon.tipo}</p>

          <hr />
        </div>
      ))}
    </>
  );
}

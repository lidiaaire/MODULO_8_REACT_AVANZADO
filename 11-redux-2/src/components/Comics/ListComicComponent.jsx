import React from "react";
import { useSelector } from "react-redux";

export default function ListComicComponent() {
  const comics = useSelector((state) => state.comics.comics);

  return (
    <div>
      <h2>ListComicComponent</h2>
      {comics && comics.length > 0 ? (
        <ul>
          {comics.map((comic, index) => (
            <li key={index}>{comic.nombre}</li>
          ))}
        </ul>
      ) : (
        <div>
          <span>No hay comics que mostrar </span>
        </div>
      )}
    </div>
  );
}

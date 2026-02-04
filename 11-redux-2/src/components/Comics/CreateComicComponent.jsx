import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComic } from "./ComicsAction";

export default function CreateComicComponent(props) {
  const [isbn, setIsbn] = useState("");
  const [nombre, setNombre] = useState("");
  const [autor, setAutor] = useState("");

  const dispatch = useDispatch();

  const saveComic = () => {
    props.changeMode();
    const newComic = {
      isbn,
      nombre,
      autor,
    };

    dispatch(addComic(newComic));
  };

  const changeIsbn = (e) => {
    setIsbn(e.target.value);
  };

  const changeNombre = (e) => {
    setNombre(e.target.value);
  };

  const changeAutor = (e) => {
    setAutor(e.target.value);
  };
  return (
    <div>
      <h2>CreateComicComponent</h2>
      <div>
        <div>
          <span>ISBN</span>
          <input value={isbn} onChange={changeIsbn}></input>
        </div>
        <div>
          <span>Nombre</span>
          <input value={nombre} onChange={changeNombre}></input>
        </div>
        <div>
          <span>Autor</span>
          <input value={autor} onChange={changeAutor}></input>
        </div>
        <div>
          <button onClick={saveComic}>Save Comic </button>
        </div>
      </div>
    </div>
  );
}

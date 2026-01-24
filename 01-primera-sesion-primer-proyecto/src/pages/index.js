import { useState, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const [nuevaVariable, setNuevaVariable] = useState("");

  const counter = useRef(0);

  const InputHandler = (e) => {
    setNuevaVariable(e.target.value);
  };

  function handleClick() {
    counter.current = counter.current + 1;
    console.log("El valor de counter es", counter.current);
    alert("¡Hiciste click" + counter.current + "veces!");
  }

  return (
    <>
      <h1>Modulo Avanzado React JS - Primera clase</h1>
      <br />

      <Link href="/GoCounterPage">
        <button>Go Counter Page</button>
      </Link>
    </>
  );
}

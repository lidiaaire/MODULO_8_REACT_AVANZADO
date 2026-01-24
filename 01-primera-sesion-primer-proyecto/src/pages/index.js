import { useState } from "react";
import Link from "next/link";
import UseCallbackComponent from "../components/UseCallbackComponent/UseCallbackComponent";
import FocusComponent from "../components/FocusComponent/FocusComponent";
import HookComponent from "../components/HookComponent/HookComponent";

export default function Home() {
  const [nuevaVariable, setNuevaVariable] = useState("");

  const [counter, setCounter] = useState(0);

  const InputHandler = (e) => {
    setNuevaVariable(e.target.value);
  };

  function handleClick() {
    setCounter(counter + 1);
    console.log("El valor de counter es", counter + 1);
    //   alert("¡Hiciste click" + (counter + 1) + "veces!");
  }

  return (
    <>
      <h1>Modulo Avanzado React JS - Primera clase</h1>
      <br />
      <div>
        <span>El valor de la nueva variable es : {nuevaVariable}</span>
      </div>
      <div>
        <span>Introduce valor </span>
        <input value={nuevaVariable} onChange={InputHandler}></input>
      </div>
      <div>
        <div>
          <span>El valor de la variable counter es : {counter}</span>
        </div>
        <button onClick={handleClick}>Click Aqui</button>
      </div>
      <hr />
      <div>
        <Link href={{ pathname: "GoCounterPage" }}> Go Counter Page </Link>
      </div>
      <hr />
      <UseCallbackComponent />
      <hr />
      <FocusComponent />
      <hr />
      <div>
        <h2>Custom Hook</h2>
        <HookComponent />
      </div>
    </>
  );
}

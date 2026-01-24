import { useRef, useState, useEffect, useMemo } from "react";
import { calcularPrecioTotal } from "./NuevoComponenteUtils";

export default function NuevoComponente() {
  const [nuevaVariable, setNuevaVariable] = useState("");
  const counter = useRef(0);
  const [productos, setProductos] = useState([
    { nombre: "", precio: 2 },
    { nombre: "", precio: 2 },
  ]);

  const totalFactura = useMemo(
    () => calcularPrecioTotal(productos),
    [productos],
  );

  const addCounter = () => {
    counter.current = counter.current + 1;
    console.log("Valor de counter: ", counter.current);
  };

  const nuevaVariableHandler = (e) => {
    setNuevaVariable(e.target.value);
  };

  useEffect(() => {
    console.log("El component se renderiza");
  });

  return (
    <div>
      <button onClick={addCounter}> Click Aqui </button>
      <br />
      <input value={nuevaVariable} onChange={nuevaVariableHandler}></input>
      <hr />
      <div>
        <span>Total factura: {totalFactura}</span>
      </div>
    </div>
  );
}

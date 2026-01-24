import { useRef, useState, useEffect, useMemo, useCallback } from "react";
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

  // Lo de abajo es lo mismo que el useMemo
  //  const totalFactura = useRef(0);

  // useEffect(() => {
  // totalFactura.current = calcularFacturaFn(productos);
  //});

  const calcularFacturaFn = useCallback(
    (productos) => calcularPrecioTotal(productos),
    [],
  );

  const calcularPrecioTotalFn = (productos) => {
    let sum = 0;
    productos.forEach((value, index, array) => {
      sum = sum + value.precio;
    });

    return sum;
  };

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

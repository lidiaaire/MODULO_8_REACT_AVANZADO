import React from "react";
import { INCREMENTAR_EN_UNO, increment, decrement } from "./CounterActions";
import { useDispatch, useSelector } from "react-redux";

export default function CounterComponent() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Contador</h2>
      <h3> Valor actual: {count} </h3>
      <br />
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Incrementar
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrementar
      </button>
    </div>
  );
}

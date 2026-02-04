import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./CounterActions";

export default function CounterComponent() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.contador.count);

  const handlerIncrement = () => {
    dispatch(increment());
  };

  const handlerDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h2>CounterComponent</h2>
      <p>Contador: {count}</p>
      <button onClick={handlerIncrement}>Increment</button>
      <button onClick={handlerDecrement}>Decrement</button>
    </div>
  );
}

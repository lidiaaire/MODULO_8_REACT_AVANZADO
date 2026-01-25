import React from "react";
import { useCounter } from "../../hooks/useCounter";
import useCheckToken from "@/src/hooks/useCheckToken";

export default function HookComponent() {
  const { count, handleIncrement, handleDecrement } = useCounter(0);
  const { isTokenOk } = useCheckToken("my_token");

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={handleIncrement}>Sumar</button>
      <button onClick={handleDecrement}>Restar</button>
    </div>
  );
}

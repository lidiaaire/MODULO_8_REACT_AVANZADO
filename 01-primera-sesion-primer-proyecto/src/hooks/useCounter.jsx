// Nuestro primer Hook
// Va a hacer las veces de un contador

import { useState } from "react";

export function useCounter(initialiteCounter) {
  const [count, setCounter] = useState(initialiteCounter);

  const handleIncrement = () => {
    let countAux = count + 1;
    setCounter(countAux);
  };

  const handleDecrement = () => {
    let countAux = count - 1;
    setCounter(countAux);
  };

  return {
    count,
    handleIncrement,
    handleDecrement,
  };
}

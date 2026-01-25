import React, { useState } from "react";

export default function CounterUserComponent() {
  const [counterUser, setCounterUser] = useState(0);

  const incrementCounterUser = () => {
    setCounterUser(counterUser + 1);
  };

  return (
    <div>
      <p>{counterUser}</p>
      <button onClick={incrementCounterUser}>Increment</button>
    </div>
  );
}

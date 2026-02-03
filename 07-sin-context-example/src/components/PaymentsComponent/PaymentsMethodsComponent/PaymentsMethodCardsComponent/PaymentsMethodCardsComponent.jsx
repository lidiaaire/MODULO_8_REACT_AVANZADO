import React from "react";

export default function PaymentsMethodCardsComponent(props) {
  // Aqui voy a usar la variable de estado TOKEN
  return (
    <div>
      <h4>PaymentsMethodCardsComponent</h4>
      <span>{props.token}</span>
    </div>
  );
}

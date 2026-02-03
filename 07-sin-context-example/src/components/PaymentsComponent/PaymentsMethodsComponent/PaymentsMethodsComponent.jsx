import React from "react";
import PaymentsMethodCardsComponent from "./PaymentsMethodCardsComponent/PaymentsMethodCardsComponent";

export default function PaymentsMethodsComponent(props) {
  return (
    <div>
      <h3>PaymentsMethodsComponent</h3>
      <PaymentsMethodCardsComponent token={props.token} />
    </div>
  );
}

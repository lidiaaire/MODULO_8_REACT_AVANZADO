import React from "react";
import PaymentsMethodsComponent from "./PaymentsMethodsComponent/PaymentsMethodsComponent";

export default function PaymentsComponent(props) {
  return (
    <div>
      <h2>PaymentsComponent</h2>
      <PaymentsMethodsComponent token={props.token} />
    </div>
  );
}

import CounterComponent from "@/components/Counter/CounterComponent";
import store from "@/core/redux/store";
import React from "react";
import { Provider } from "react-redux";

export default function index() {
  return (
    <Provider store={store}>
      <h1> Primer ejemplo de Redux </h1>
      <CounterComponent />
    </Provider>
  );
}

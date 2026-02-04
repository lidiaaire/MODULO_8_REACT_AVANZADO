import CounterComponent from "@/components/Counter/CounterComponent";
import store from "@/core/redux/store";
import React from "react";
import { Provider, useSelector } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <h1>Nuestro Contador </h1>
      <CounterComponent />
    </Provider>
  );
}

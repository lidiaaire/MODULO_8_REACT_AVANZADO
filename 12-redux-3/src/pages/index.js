import UserComponent from "@/components/User/UserComponent";
import store from "@/core/redux/store";
import React from "react";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <h1>Gestor de mi usuario </h1>
      <UserComponent />
    </Provider>
  );
}

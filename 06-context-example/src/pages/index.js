import React from "react";
import DetailsComponent from "@/components/DetailsComponent/DetailsComponent";
import PaymentsComponent from "@/components/PaymentsComponent/PaymentsComponent";
import FavsComponent from "@/components/FavsComponent/FavsComponent";
import GlobalState from "@/core/context/GlobalState";

export default function Home() {
  return (
    <GlobalState>
      <h1>My profile </h1>
      <br />
      <DetailsComponent />
      <hr />
      <PaymentsComponent />
      <hr />
      <FavsComponent />
    </GlobalState>
  );
}

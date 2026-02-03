import DetailsComponent from "@/components/DetailsComponent/DetailsComponent";
import FavsComponent from "@/components/FavsComponent/FavsComponent";
import PaymentsComponent from "@/components/PaymentsComponent/PaymentsComponent";
import React from "react";
import { useState } from "react";

export default function Home() {
  const [token, setToken] = useState("123456789");
  return (
    <>
      <h1>My profile </h1>
      <br />

      <DetailsComponent token={token} />
      <hr />
      <PaymentsComponent token={token} />
      <hr />
      <FavsComponent token={token} />
    </>
  );
}

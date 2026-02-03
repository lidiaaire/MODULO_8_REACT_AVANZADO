import React from "react";
import PersonalDataComponent from "./PersonalDataComponent/PersonalDataComponent";

export default function DetailsComponent(props) {
  return (
    <div>
      <h2>DetailsComponent</h2>
      <PersonalDataComponent token={props.token} />
    </div>
  );
}

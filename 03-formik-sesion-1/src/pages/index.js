import CreateUserComponent from "@/components/CreateUserComponent/CreateUserComponent";
import CreateUserFormikComponent from "@/components/CreateUserFormikComponent/CreateUserFormikComponent";
import ExampleOtherFormikComponent from "@/components/ExampleOtherFormikComponent/ExampleOtherFormikComponent";
import CreateUserFormikWithValidation from "@/components/CreateUserFormikWithValidationsComponent/CreateUserFormikWithValidation";
import CreateUserFormikWithYupComponent from "@/components/CreateUserFormikWithYupComponent/CreateUserFormikWithYupComponent";
import React from "react";

export default function index() {
  return (
    <>
      {/*<CreateUserComponent />*/}
      {/* <CreateUserFormikComponent /> */}
      {/* <ExampleOtherFormikComponent /> */}
      {/* <CreateUserFormikWithValidation /> */}
      <CreateUserFormikWithYupComponent />
    </>
  );
}

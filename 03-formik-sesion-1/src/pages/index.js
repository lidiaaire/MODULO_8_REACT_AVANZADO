import CreateUserComponent from "@/components/CreateUserComponent/CreateUserComponent";
import CreateUserFormikComponent from "@/components/CreateUserComponent/CreateUserFormikComponent/CreateUserFormikComponent";
import ExampleOtherFormikComponent from "@/components/ExampleOtherFormikComponent/ExampleOtherFormikComponent";
import React from "react";

export default function index() {
  return (
    <>
      {/*<CreateUserComponent />*/}
      <CreateUserFormikComponent />
      <ExampleOtherFormikComponent />
    </>
  );
}

import React from "react";
import UserDetailComponent from "./UserDetailComponent/UserDetailComponent";
import UpdateUserDetailComponent from "./UpdateUserDetailComponent/UpdateUserDetailComponent";

export default function ProfileComponent() {
  return (
    <>
      <h1>ProfileComponent </h1>
      <br />
      <UserDetailComponent />
      <hr />
      <UpdateUserDetailComponent />
    </>
  );
}

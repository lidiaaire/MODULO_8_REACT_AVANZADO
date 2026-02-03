import ProfileComponent from "@/components/ProfileComponent/ProfileComponent";
import UserGlobalState from "@/core/context/UserGlobalState";
import React from "react";

export default function Home() {
  return (
    <UserGlobalState>
      <ProfileComponent />
    </UserGlobalState>
  );
}

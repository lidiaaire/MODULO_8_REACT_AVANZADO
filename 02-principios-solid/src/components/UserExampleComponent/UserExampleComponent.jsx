/* eslint-disable react-hooks/set-state-in-effect */
import React from "react";
import { useState, useEffect } from "react";

export default function UserExampleComponent() {
  const [userInfo, setUserInfo] = useState("userInfo");

  useEffect(() => {
    // Get userInfo
    setUserInfo("userInfoUpdated");
  }, []);

  return (
    <div>
      <p>{userInfo}</p>
    </div>
  );
}

/* eslint-disable react-hooks/set-state-in-effect */
import CounterUserComponent from "@/components/CounterUserComponent/CounterUserComponent";
import UserDetailsComponent from "@/components/UserDetailsComponent/UserDetailsComponent";
import UserExampleComponent from "@/components/UserExampleComponent/UserExampleComponent";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let usersAux = [
      { id: "0", name: "user 0", password: "" },
      { id: "1", name: "user 1", password: "" },
    ];
    setUsers(usersAux);
  }, []);

  return (
    <>
      <h1> Principios SOLID </h1>
      <div>
        <UserExampleComponent />
        <CounterUserComponent />
      </div>

      <div>
        {users.map((user, index) => {
          return (
            <div key={index}>
              <UserDetailsComponent idParam={user.id} nameParam={user.name} />
            </div>
          );
        })}
      </div>
    </>
  );
}

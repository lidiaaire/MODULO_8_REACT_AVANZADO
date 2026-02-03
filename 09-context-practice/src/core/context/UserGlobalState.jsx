import React, { useState } from "react";
import UserContext from "./UserContext";

const initState = {
  name: "lidia",
  surname: "aire",
};

export default function UserGlobalState(props) {
  const [usuario, setUsuario] = useState({ initState });
  const updateUserProps = (nameParam, surnameParam) => {
    const userAux = {
      name: nameParam,
      surname: surnameParam,
    };

    setUsuario(userAux);
  };

  return (
    <UserContext.Provider value={{ usuario, updateUserProps }}>
      {props.children}
    </UserContext.Provider>
  );
}

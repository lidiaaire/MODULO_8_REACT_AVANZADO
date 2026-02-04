import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyUserName } from "./UserActions";

export default function UserComponent() {
  const [userNameAux, setUserNameAux] = useState("");

  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  const handlerOnChangeUserName = (e) => {
    setUserNameAux(e.target.value);
  };

  const handlerModifyUserName = () => {
    const payloadAux = {
      username: userNameAux,
    };
    dispatch(modifyUserName(payloadAux));
  };
  return (
    <div>
      <h2>UserComponent</h2>

      <div>
        <span>Username: {username}</span>
      </div>
      <hr />
      <div>
        <input value={userNameAux} onChange={handlerOnChangeUserName} />
        <button onClick={handlerModifyUserName}>Modify Username</button>
      </div>
    </div>
  );
}

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsername } from "./UserActions";

export default function UserComponent() {
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>User Component</h2>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => dispatch(setUsername(e.target.value))}
      />
      <p>Username: {username}</p>
    </div>
  );
}

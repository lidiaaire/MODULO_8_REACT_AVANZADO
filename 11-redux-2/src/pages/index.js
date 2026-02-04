import CreateComicComponent from "@/components/Comics/CreateComicComponent";
import ListComicComponent from "@/components/Comics/ListComicComponent";
import ReduxConfig from "@/components/commons/ReduxConfig";
import React, { useState } from "react";

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isCreating, setIsCreating] = useState(false);
  const changeMode = () => {
    setIsCreating(!isCreating);
  };
  return (
    <ReduxConfig>
      <h1>Nuestra tienda de comics</h1>

      <ListComicComponent />
      <hr />
      {!isCreating ? (
        <button onClick={changeMode}>Add new comic</button>
      ) : (
        <CreateComicComponent changeMode={changeMode} />
      )}
    </ReduxConfig>
  );
}

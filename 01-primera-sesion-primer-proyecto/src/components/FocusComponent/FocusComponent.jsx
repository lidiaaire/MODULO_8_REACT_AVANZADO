import { useRef } from "react";

const FocusComponent = () => {
  const inputRef = useRef(null);
  const divRef = useRef(null);

  const handleFocus = () => {
    let inputElement = inputRef.current;

    inputElement.value = "Hola";
  };

  const handlerOnchange = (e) => {
    let divElement = divRef.current;
    let texto = e.target.value;
    if (texto === "Curri") {
      divElement.style.cssText = "background-color: red";
    }
  };

  return (
    <div>
      <div ref={divRef}>
        <input type="text" ref={inputRef} onChange={handlerOnchange}></input>
        <button onClick={handleFocus}>Focus Input </button>
      </div>
    </div>
  );
};

export default FocusComponent;

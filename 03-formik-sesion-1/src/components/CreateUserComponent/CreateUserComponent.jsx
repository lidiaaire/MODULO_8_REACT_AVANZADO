import React from "react";

export default function CreateUserComponent() {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nombreHandler = (e) => {
    setNombre(e.target.value);
  };

  const apellidosHandler = (e) => {
    setApellidos(e.target.value);
  };

  const fechaNacimientoHandler = (e) => {
    setFechaNacimiento(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const addUserClick = () => {
    alert(
      `Creacion del usuario: Nombre${nombre}, Apellidos${apellidos}, Fecha De Nacimiento ${fechaNacimiento}, Email${email}, Password${password}`,
    );
  };

  return (
    <>
      <div>
        <h1>Create User Component</h1>
      </div>
      <br />
      <div>
        <div>
          <span>Nombre</span>
          <input type="text" value={nombre} onChange={nombreHandler}></input>
        </div>
        <div>
          <span>Apellidos</span>
          <input
            type="text"
            value={apellidos}
            onChange={apellidosHandler}
          ></input>
        </div>
        <div>
          <span>Fecha De Nacimiento </span>
          <input
            type="text"
            value={fechaNacimiento}
            onChange={fechaNacimientoHandler}
          ></input>
        </div>
        <div>
          <span>Email</span>
          <input type="text" value={email} onChange={emailHandler}></input>
        </div>
        <div>
          <span>password</span>
          <input
            type="text"
            value={password}
            onChange={passwordHandler}
          ></input>
        </div>
        <div>
          <button onClick={addUserClick}>Crear usuario</button>
        </div>
      </div>
    </>
  );
}

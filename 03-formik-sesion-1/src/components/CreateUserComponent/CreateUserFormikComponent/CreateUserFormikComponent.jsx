import { Field, Formik, Form } from "formik";
import React from "react";

export default function CreateUserFormikComponent() {
  const cuandoQuieraGuardarElUsuario = (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <>
      <div>
        <h1>Create User Formik Component</h1>
      </div>

      <Formik
        initialValues={{
          nombre: "",
          apellidos: "",
          fechaNacimiento: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => cuandoQuieraGuardarElUsuario(values)}
      >
        <Form>
          <div>
            <span>Nombre</span>
            <Field type="text" name="nombre" placeholder="Nombre..." />
          </div>

          <div>
            <span>Apellidos</span>
            <Field type="text" name="apellidos" placeholder="Apellidos..." />
          </div>

          <div>
            <span>Fecha de Nacimiento</span>
            <Field
              type="text"
              name="fechaNacimiento"
              placeholder="Fecha de Nacimiento..."
            />
          </div>

          <div>
            <span>Email</span>
            <Field type="text" name="email" placeholder="Email..." />
          </div>

          <div>
            <span>Password</span>
            <Field type="text" name="password" placeholder="Password..." />
          </div>

          <button type="submit">Crear usuario</button>
        </Form>
      </Formik>
    </>
  );
}

import { Field, Formik, Form, ErrorMessage } from "formik";
import React from "react";

export default function CreateUserFormikWithValidationsComponent() {
  const cuandoQuieraGuardarElUsuario = (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <>
      <div>
        <h1>Create User Formik Component With Validation </h1>
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
        validate={(values) => {
          let errors = {};
          if (values.nombre) {
            errors.nombre = "Required";
          }
          if (values.apellidos) {
            errors.apellidos = "Required";
          }
          if (!values.fechaNacimiento) {
            errors.fechaNacimiento = "Required";
          } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(values.fechaNacimiento)) {
            errors.fechaNacimiento = "Invalid format (DD/MM/AAAA)";
          }
          if (!values.email) {
            errors.email = "Required";
          } else if (values.email.includes("@")) {
            errors.email = "Invalid format";
          }
          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 6) {
            errors.password = "Mínimo 6 caracteres";
          }
          return errors;
        }}
      >
        {({ errors }) => (
          <Form>
            <div>
              <span>Nombre</span>
              <Field type="text" name="nombre" placeholder="Nombre..." />
              <ErrorMessage name="nombre" component="div" />
            </div>

            <div>
              <span>Apellidos</span>
              <Field type="text" name="apellidos" placeholder="Apellidos..." />
              <ErrorMessage name="apellidos" component="div" />
            </div>

            <div>
              <span>Fecha de Nacimiento</span>
              <Field
                type="text"
                name="fechaNacimiento"
                placeholder="Fecha de Nacimiento..."
              />
              <ErrorMessage name="fechaNacimiento" component="div" />
            </div>

            <div>
              <span>Email</span>
              <Field type="text" name="email" placeholder="Email..." />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <span>Password</span>
              <Field type="text" name="password" placeholder="Password..." />
              <ErrorMessage name="password" component="div" />
            </div>

            <button type="submit">Crear usuario</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

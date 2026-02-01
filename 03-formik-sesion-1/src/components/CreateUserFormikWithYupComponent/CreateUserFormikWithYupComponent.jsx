import { Field, Formik, Form, ErrorMessage } from "formik";
import { object, string } from "yup";

export default function CreateUserFormikWithYupComponent() {
  const validationSchemaYup = object().shape({
    nombre: string()
      .min(2, "Mínimo debe tener 2 caracteres")
      .required("Required"),

    apellidos: string().required("Required"),

    fechaNacimiento: string()
      .required("Required")
      .matches(/^\d{2}\/\d{2}\/\d{4}$/, "Formato DD/MM/AAAA"),

    email: string().email("Email inválido").required("Required"),

    password: string().min(6, "Mínimo 6 caracteres").required("Required"),
  });

  const cuandoQuieraGuardarElUsuario = (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <>
      <h1>Create User Formik Component With Validation</h1>

      <Formik
        initialValues={{
          nombre: "",
          apellidos: "",
          fechaNacimiento: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchemaYup}
        onSubmit={cuandoQuieraGuardarElUsuario}
      >
        <Form>
          <div>
            <span>Nombre</span>
            <Field type="text" name="nombre" />
            <ErrorMessage name="nombre" component="div" />
          </div>

          <div>
            <span>Apellidos</span>
            <Field type="text" name="apellidos" />
            <ErrorMessage name="apellidos" component="div" />
          </div>

          <div>
            <span>Fecha de Nacimiento</span>
            <Field type="text" name="fechaNacimiento" />
            <ErrorMessage name="fechaNacimiento" component="div" />
          </div>

          <div>
            <span>Email</span>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <span>Password</span>
            <Field type="text" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <button type="submit">Crear usuario</button>
        </Form>
      </Formik>
    </>
  );
}

import { Field, Formik, Form } from "formik";
import React from "react";

export default function ExampleOtherFormikComponent() {
  const guardarActividad = (values) => {
    alert(
      `Actividad creada:
Nombre: ${values.nombreActividad}
Ubicación: ${values.ubicacion}
Número de personas: ${values.numeroPersonas}`,
    );
  };
  return (
    <>
      <div>
        <h1> Formulario de actividad</h1>
      </div>

      <Formik
        initialValues={{
          nombreActividad: "",
          ubicacion: "",
          numeroPersonas: "",
        }}
        onSubmit={(values) => guardarActividad(values)}
      >
        <Form>
          <div>
            <span> Nombre de la actividad</span>
            <Field
              type="text"
              name="nombreActividad"
              placeholder="Nombre de la actividad..."
            />
          </div>
          <div>
            <span> Ubicacion</span>
            <Field type="text" name="ubicacion" placeholder="Ubicacion..." />
          </div>
          <div>
            <span> Numero de personas</span>
            <Field
              type="text"
              name="numeroPersonas"
              placeholder="Numeros de personas..."
            />
          </div>

          <button type="submit">Crear actividad</button>
        </Form>
      </Formik>
    </>
  );
}

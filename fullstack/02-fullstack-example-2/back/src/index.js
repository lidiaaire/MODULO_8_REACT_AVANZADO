const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const digimonsRouter = require("./routes/digimonsRoutes");
const app = express();
const PORT = 9000;

// URL de conexión a MongoDB Atlas (reemplaza con tus credenciales y nombre de base de datos)
const url_mongo =
  "mongodb+srv://lidiaaire:Puertosol10@cluster0.d3tputi.mongodb.net/lidia_codespace?appName=Cluster0";

// Conexión a MongoDB Atlas
mongoose.connect(url_mongo);

// Eventos de conexión a MongoDB
const db = mongoose.connection;

// Manejo de eventos de conexión
db.on("error", (error) => {
  console.error(`Error de conexión a Mongo ${error}`);
});

db.on("connected", () => {
  console.log("Success connected to Mongo");
});

db.on("disconnected", () => {
  console.log("Mongo is disconnected");
});

// Middleware para manejar CORS y parsear JSON en las solicitudes HTTP y rutas de la API
app.use(cors());
app.use(express.json());
app.use("/digimons", digimonsRouter);

// Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

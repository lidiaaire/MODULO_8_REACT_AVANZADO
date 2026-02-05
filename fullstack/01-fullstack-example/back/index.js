const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 9000;

//middlewares

app.use(cors());
app.use(express.json());

//routes
app.get("/saludo", (req, res) => {
  res.json({
    message: "Hola desde el backend!",
  });
});

app.post("/post-saludo", (req, res) => {
  res.json({
    message: "Hello World(POST)!",
  });
});

app.post("/saludar-persona", (req, res) => {
  console.log(req.body);
  const { name } = req.body;

  res.json({ message: `Hello ${name}!` });
});

// levantamos el servidor

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

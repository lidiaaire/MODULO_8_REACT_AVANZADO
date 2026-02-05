const express = require("express");
const cors = require("cors");
const digimonsRouter = require("./routes/digimonsRoutes");
const app = express();
const PORT = 9000;

app.use(cors());
app.use(express.json());

app.use("/digimons", digimonsRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

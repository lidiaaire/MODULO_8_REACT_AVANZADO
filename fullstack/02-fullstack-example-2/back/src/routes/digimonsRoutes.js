const {
  getDigimons,
  loadData,
  getDigimonsByNombre,
  createDigimon,
  updateDigimon,
  deleteDigimon,
} = require("../controllers/digimonController");

const digimonsRouter = require("express").Router();

digimonsRouter.get("/", getDigimons);
// digimonsRouter.get("/loadData", loadData);
digimonsRouter.get("/:id", getDigimonsByNombre);
digimonsRouter.post("/", createDigimon);
digimonsRouter.put("/:id", updateDigimon);
digimonsRouter.delete("/:id", deleteDigimon);

module.exports = digimonsRouter;

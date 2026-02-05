const { getDigimons } = require("../controllers/digimonController");

const digimonsRouter = require("express").Router();

digimonsRouter.get("/", getDigimons);

module.exports = digimonsRouter;

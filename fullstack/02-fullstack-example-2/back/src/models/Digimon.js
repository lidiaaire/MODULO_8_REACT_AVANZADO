const mongoose = require("mongoose");

const schema = mongoose.Schema;

const digimonSchema = new schema({
  //id: 1,
  // nombre: "Agumon",
  // tipo: "Vacuna",
  // evolucion: ["Greymon", "MetalGreymon", "WarGreymon"],

  nombre: {
    type: String,
    required: true,
  },

  tipo: {
    type: String,
    required: true,
  },
  evolucion: {
    type: [String],
    required: true,
  },
});

const digimon = mongoose.model("Digimon", digimonSchema, "Digimon");

module.exports = digimon;

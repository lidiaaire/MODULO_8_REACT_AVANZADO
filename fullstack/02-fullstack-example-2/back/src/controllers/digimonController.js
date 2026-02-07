const { digimonsDB } = require("../mocks/digimonsDB");
const { find } = require("../mocks/digimonsMethodMongoDB");
const digimonModel = require("../models/digimon");

// Get all digimons from the database

const getDigimons = async (req, res) => {
  try {
    const allDigimons = await digimonModel.find();
    const redDigimons = allDigimons.map((digimon) => {
      return {
        id: digimon.id,
        nombre: digimon.nombre,
      };
    });

    res.status(200).json({
      status: "success",
      data: redDigimons,
      error: null,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

// Get digimon by id from the database

const getDigimonsByNombre = async (req, res) => {
  try {
    const id = req.params.id;
    const digimon = await digimonModel.findById(id);
    console.log(digimon);
    res.status(200).json({
      status: "success",
      data: digimon,
      error: null,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

// Create a new digimon in the database

const createDigimon = async (req, res) => {
  try {
    const digimonData = req.body;
    const newDigimon = await digimonModel.create({
      nombre: digimonData.nombre,
      tipo: digimonData.tipo,
      evolucion: digimonData.evolucion,
    });
    await newDigimon.save();
    console.log(newDigimon);
    res.status(200).json({
      status: "success",
      data: newDigimon,
      error: null,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

// Update a digimon in the database

const updateDigimon = async (req, res) => {
  try {
    const id = req.params.id;
    const { nombre, tipo, evolucion } = req.body;

    const digimonAux = await digimonModel.findById(id);

    if (!digimonAux) return res.status(404).send("Digimon not found");

    if (nombre) {
      digimonAux.nombre = nombre;
    }

    if (tipo) {
      digimonAux.tipo = tipo;
    }

    if (evolucion) {
      digimonAux.evolucion = evolucion;
    }

    await digimonAux.save();

    res.status(200).json({
      status: "success",
      data: digimonAux,
      error: null,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

// Delete a digimon from the database

const deleteDigimon = async (req, res) => {
  try {
    const id = req.params.id;
    const digimonAux = await digimonModel.findByIdAndDelete(id);
    res.status(200).json({
      status: "success",
      data: digimonAux,
      error: null,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

// Load initial data

const loadData = async (req, res) => {
  try {
    digimonsDB.map(async (digimon) => {
      const newDigimon = digimonModel({
        nombre: digimon.nombre,
        tipo: digimon.tipo,
        evolucion: digimon.evolucion,
      });
      await newDigimon.save();
    });
    res.sendStatus(200);
  } catch (error) {
    res.status(500);
  }
};

module.exports = {
  getDigimons,
  getDigimonsByNombre,
  createDigimon,
  updateDigimon,
  deleteDigimon,
  loadData,
};

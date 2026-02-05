const { find } = require("../mocks/digimonsMethodMongoDB");

const getDigimons = (req, res) => {
  try {
    const allDigimons = find();
    res.status(200).json({
      digimons: allDigimons,
    });
  } catch (error) {
    res.status(500);
  }
};

module.exports = {
  getDigimons,
};

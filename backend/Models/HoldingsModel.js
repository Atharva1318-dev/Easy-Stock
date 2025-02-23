const { holdingSchema } = require("../Schema/HoldingSchema");
const { model } = require("mongoose");

const Holding = new model("Holding", holdingSchema);

module.exports = { Holding };
const {positionSchema} = require("../Schema/PositionSchema");
const { model } = require("mongoose");

const Position = new model("Position", positionSchema);

module.exports = { Position };
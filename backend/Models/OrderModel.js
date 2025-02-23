const { orderSchema } = require("../Schema/OrdersSchema");
const { model } = require("mongoose");

const Order = new model("Order", orderSchema);

module.exports = { Order };
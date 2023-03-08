const mongoose = require("mongoose");

const BuyerSchema = mongoose.Schema({
  BuyerQty: Number,
  BuyerPrice: Number
});

const BuyerModel = mongoose.model("products", BuyerSchema);

module.exports = {
  BuyerModel
};
const mongoose = require("mongoose");

const BuyerSchema = mongoose.Schema({
  BuyerQty:  { type: Number, required: true },
  BuyerPrice: { type: Number, required: true }
});

const BuyerModel = mongoose.model("products", BuyerSchema);

module.exports = {
  BuyerModel
};
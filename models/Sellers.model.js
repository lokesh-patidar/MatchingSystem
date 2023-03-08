const mongoose = require("mongoose");

const sellerSchema = mongoose.Schema({
  SellerQty: { type: Number, required: true },
  SellerPrice: { type: Number, required: true }
});

const SellerModel = mongoose.model("users", sellerSchema);

module.exports = {
  SellerModel
};
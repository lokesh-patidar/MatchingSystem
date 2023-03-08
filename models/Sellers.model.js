const mongoose = require("mongoose");

const sellerSchema = mongoose.Schema({
  SellerQty: Number,
  SellerPrice: Number
});

const SellerModel = mongoose.model("users", sellerSchema);

module.exports = {
  SellerModel
};
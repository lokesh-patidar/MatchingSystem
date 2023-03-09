const mongoose = require("mongoose");

const CompleteOrderSchema = mongoose.Schema({
  Qty: { type: Number, required: true },
  Price: { type: Number, required: true }
});

const CompleteOrderModel = mongoose.model("completeOrder", CompleteOrderSchema);

module.exports = {
  CompleteOrderModel
};
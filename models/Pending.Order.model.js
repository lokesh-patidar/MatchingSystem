const mongoose = require("mongoose");

const PendingOrderSchema = mongoose.Schema({
  Type: { type: String, required: true},
  Qty: { type: Number, required: true },
  Price: { type: Number, required: true }
});

const PendingOrderModel = mongoose.model("pendingOrder", PendingOrderSchema);

module.exports = {
  PendingOrderModel
};
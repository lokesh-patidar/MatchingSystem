const mongoose = require("mongoose");

const BarterSchema = mongoose.Schema({
    name: String,
    title: String,
    date: String,
    userImg: String,
    deviceOne: String,
    deviceTwo: String,
    status: String,
    offeredProductName: String,
    offeredProductDescription: String,
    offeredProductValue: String,
    isAccepeted: Boolean,
    note: String,
    offeredProductCondition: String,
});

const BarterFirstModel = mongoose.model("barter_first", BarterSchema);

module.exports = {
    BarterFirstModel
};
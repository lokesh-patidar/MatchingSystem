const express = require("express");
const { BuyerModel } = require("../models/Buyer.model");
require('dotenv').config();


const buyerRouter = express.Router();

buyerRouter.post("/add", async (req, res) => {

    const { BuyerQty, BuyerPrice } = req.body;

    try {
        let buyer = new BuyerModel({ BuyerQty, BuyerPrice });
        await buyer.save();
        res.send({ Message: "Buyer added Successfully!" });
        console.log(buyer);
    }
    catch (err) {
        res.send({ Message: "Admin Registration Failed!" });
        console.log(err);
    }
});


buyerRouter.get("/", async (req, res) => {
    try {
        let buyer = await BuyerModel.find();
        res.send(buyer);
    }
    catch (err) {
        res.send({ Message: "Can not get users data!" });
        console.log(err);
    }
});


// buyerRouter.delete("/deletemany", async (req, res) => {
//     try {
//         await BuyerModel.deleteMany();
//         res.send({ Message: "All buyer deleted successfully!" });
//     }
//     catch (err) {
//         console.log(err);
//         res.send({ Message: "Can't delete all buyers!" });
//     }
// });


buyerRouter.patch("/update/:id", async (req, res) => {
    let id = req.params.id;
    let payload = req.body;
    try {
        await BuyerModel.findByIdAndUpdate({ "_id": id }, payload);
        res.send({ Message: "Buyer updated successfully!" });
    }
    catch (err) {
        res.send({ Message: "Buyer can't be updated!" });
        console.log(err);
    }
});


buyerRouter.delete("/delete/:id", async (req, res) => {
    let id = req.params.id;
    try {
        await BuyerModel.findByIdAndDelete({ "_id": id });
        res.send({ Message: "Buyer deleted successfully!" });
    }
    catch (err) {
        res.send({ Message: "Buyer can't be deleted!" });
        console.log(err);
    }
});

module.exports = {
    buyerRouter
};
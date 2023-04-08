const express = require("express");
const { BarterFirstModel } = require("../models/Barter_first.modal");
const barterFirstRouter = express.Router();


barterFirstRouter.get("/", async (req, res) => {
    try {
        const Item = await BarterFirstModel.find();
        res.send(Item);
    }
    catch (err) {
        console.log(err);
        res.send({ Message: "Can't find barter item!" });
    }
});

barterFirstRouter.patch("/:id", async (req, res) => {
    const payload = req.body;
    const id = req.params.id;

    try {
        await BarterFirstModel.findByIdAndUpdate({ _id: id }, payload);
        res.send({ Message: "barter item Updated!" });
    } catch (error) {
        console.log(err);
        res.send({ Message: "barter item can't be updated!" });
    }
});


// Insert many
barterFirstRouter.post("/addmany", async (req, res) => {
    const payload = req.body;
    try {
        await BarterFirstModel.insertMany(payload);
        res.send({ Message: "All barter item added successfully!" });
    } catch (err) {
        console.log(err);
        res.send({ Message: "All barter item can't be added!" });
    }
});

// All product delete
barterFirstRouter.delete("/deletemany", async (req, res) => {
    try {
        await BarterFirstModel.deleteMany();
        res.send({ Message: "All barter item deleted!" });
    } catch (err) {
        console.log(err);
        res.send({ Message: "All barter item can not be deleted!" });
    }
});

barterFirstRouter.post("/", async (req, res) => {
    const payload = req.body;
    try {
        const data = new BarterFirstModel(payload);
        await data.save();
        res.send({ Message: "barter added successfully!" });
        console.log(data);
    } catch (err) {
        console.log(err);
        res.send({ Message: "barter can not be added!" });
    }
});

barterFirstRouter.delete("/:id", async (req, res) => {
    const id = req.params.id;

    try {
        await BarterFirstModel.findByIdAndDelete({ _id: id });
        res.send("Deleted Successfully!");
    } catch (error) {
        console.log(err);
        res.send({ msg: "can't be deleted!" });
    }
});

module.exports = { barterFirstRouter };

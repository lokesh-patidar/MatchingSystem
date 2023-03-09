const express = require("express");
const { PendingOrderModel } = require("../models/Pending.order.model");
const pendingOrderRouter = express.Router();


pendingOrderRouter.get("/", async (req, res) => {
  try {
    const Item = await PendingOrderModel.find();
    res.send(Item);
  }
  catch (err) {
    console.log(err);
    res.send({ Message: "Can't find pending order data!" });
  }
});

pendingOrderRouter.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  const id = req.params.id;

  try {
    await PendingOrderModel.findByIdAndUpdate({ _id: id }, payload);
    res.send({ Message: "pending data Updated!" });
  } catch (error) {
    console.log(err);
    res.send({ Message: "pending data can't be updated!" });
  }
});


// Insert many
pendingOrderRouter.post("/addmany", async (req, res) => {
  const payload = req.body;
  try {
    await PendingOrderModel.insertMany(payload);
    res.send({ Message: "All pending data added successfully!" });
  } catch (err) {
    console.log(err);
    res.send({ Message: "All pending data can't be added!" });
  }
});

// All product delete
pendingOrderRouter.delete("/deletemany", async (req, res) => {
  try {
    await PendingOrderModel.deleteMany();
    res.send({ Message: "All pending data deleted!" });
  } catch (err) {
    console.log(err);
    res.send({ Message: "All pending data can not be deleted!" });
  }
});

pendingOrderRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const data = new PendingOrderModel(payload);
    await data.save();
    res.send({ Message: "pending data added successfully!" });
    console.log(data);
  } catch (err) {
    console.log(err);
    res.send({ Message: "pending data can not be added!" });
  }
});

pendingOrderRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await PendingOrderModel.findByIdAndDelete({ _id: id });
    res.send("pending data deleted Successfully!");
  } catch (error) {
    console.log(err);
    res.send({ msg: "pending data can't be deleted!" });
  }
});

module.exports = { pendingOrderRouter };

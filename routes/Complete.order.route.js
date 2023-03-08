const express = require("express");
const { CompleteOrderModel } = require("../models/Complete.order.model");
const completeOrderRouter = express.Router();


completeOrderRouter.get("/", async (req, res) => {
  try {
    const Item = await CompleteOrderModel.find();
    res.send(Item);
  }
  catch (err) {
    console.log(err);
    res.send({ Message: "Can't find complete order item!" });
  }
});

completeOrderRouter.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  const id = req.params.id;

  try {
    await CompleteOrderModel.findByIdAndUpdate({ _id: id }, payload);
    res.send({ Message: "complete order item Updated!" });
  } catch (error) {
    console.log(err);
    res.send({ Message: "complete order item can't be updated!" });
  }
});


// Insert many
completeOrderRouter.post("/addmany", async (req, res) => {
  const payload = req.body;
  try {
    await CompleteOrderModel.insertMany(payload);
    res.send({ Message: "All complete order item added successfully!" });
  } catch (err) {
    console.log(err);
    res.send({ Message: "All complete order item can't be added!" });
  }
});

// All product delete
completeOrderRouter.delete("/deletemany", async (req, res) => {
  try {
    await CompleteOrderModel.deleteMany();
    res.send({ Message: "All complete order item deleted!" });
  } catch (err) {
    console.log(err);
    res.send({ Message: "All complete order item can not be deleted!" });
  }
});

completeOrderRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const data = new CompleteOrderModel(payload);
    await data.save();
    res.send({ Message: "Complete order added successfully!" });
    console.log(data);
  } catch (err) {
    console.log(err);
    res.send({ Message: "Complete order can not be added!" });
  }
});

completeOrderRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await CompleteOrderModel.findByIdAndDelete({ _id: id });
    res.send("Deleted Successfully!");
  } catch (error) {
    console.log(err);
    res.send({ msg: "can't be deleted!" });
  }
});

module.exports = { completeOrderRouter };

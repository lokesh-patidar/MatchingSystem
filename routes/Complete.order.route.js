const express = require("express");
const { CompleteOrderModel } = require("../models/Complete.order.model");
const CompleteOrderRouter = express.Router();


CompleteOrderRouter.get("/", async (req, res) => {
  try {
    const Item = await CompleteOrderModel.find();
    res.send(Item);
  }
  catch (err) {
    console.log(err);
    res.send({ Message: "Can't find complete order item!" });
  }
});

CompleteOrderRouter.patch("/update/:id", async (req, res) => {
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
CompleteOrderRouter.post("/addmany", async (req, res) => {
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
CompleteOrderRouter.delete("/deletemany", async (req, res) => {
  try {
    await CompleteOrderModel.deleteMany();
    res.send({ Message: "All complete order item deleted!" });
  } catch (err) {
    console.log(err);
    res.send({ Message: "All complete order item can not be deleted!" });
  }
});

CompleteOrderRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const data = new SellerModel(payload);
    await data.save();
    res.send({ Message: "Seller added successfully!" });
    console.log(data);
  } catch (err) {
    console.log(err);
    res.send({ Message: "Seller can not be added!" });
  }
});

CompleteOrderRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await CompleteOrderModel.findByIdAndDelete({ _id: id });
    res.send("Deleted Successfully!");
  } catch (error) {
    console.log(err);
    res.send({ msg: "can't be deleted!" });
  }
});

module.exports = { CompleteOrderRouter };

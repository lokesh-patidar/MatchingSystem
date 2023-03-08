const express = require("express");
const { SellerModel } = require("../models/Sellers.model");
const sellerRouter = express.Router();


sellerRouter.get("/", async (req, res) => {
  try {
    const sellerItem = await SellerModel.find();
    res.send(sellerItem);
  }
  catch (err) {
    console.log(err);
    res.send({ Message: "Can't find sellers item!" });
  }
});

sellerRouter.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  const id = req.params.id;

  try {
    await SellerModel.findByIdAndUpdate({ _id: id }, payload);
    res.send({ Message: "seller Updated!" });
  } catch (error) {
    console.log(err);
    res.send({ Message: "seller can't be updated!" });
  }
});


// Insert many
sellerRouter.post("/addmany", async (req, res) => {
  const payload = req.body;
  try {
    await SellerModel.insertMany(payload);
    res.send({ Message: "All sellers added successfully!" });
  } catch (err) {
    console.log(err);
    res.send({ Message: "All sellers can't be added!" });
  }
});

// All product delete
sellerRouter.delete("/deletemany", async (req, res) => {
  try {
    await SellerModel.deleteMany();
    res.send({ Message: "All Sellers deleted!" });
  } catch (err) {
    console.log(err);
    res.send({ Message: "All Sellers can not be deleted!" });
  }
});

sellerRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const seller = new SellerModel(payload);
    await seller.save();
    res.send({ Message: "Seller added successfully!" });
    console.log(seller);
  } catch (err) {
    console.log(err);
    res.send({ Message: "Seller can not be added!" });
  }
});

sellerRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await SellerModel.findByIdAndDelete({ _id: id });
    res.send("Seller Deleted Successfully!");
  } catch (error) {
    console.log(err);
    res.send({ msg: "Seller can't be deleted!" });
  }
});

module.exports = { sellerRouter };

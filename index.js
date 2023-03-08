const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { buyerRouter } = require("./routes/Buyer.route");
const { sellerRouter } = require("./routes/Seller.route");
const { completeOrderRouter } = require("./routes/Complete.order.route");

const app = express();
app.use(express.json());
app.use(cors({
    origin: "*"
}));

app.get("/", (req, res) => {
    res.send({ Message: "Welcome to Matching System Backend" });
});

app.use("/buyer", buyerRouter);
app.use("/seller", sellerRouter);
app.use("/complete", completeOrderRouter);

app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("Connected to the Database of Matching System");
    }
    catch (err) {
        console.log(err);
        console.log("Connection Failed!");
    }
    console.log(`Server is running...`);
});
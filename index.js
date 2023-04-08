const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { completeOrderRouter } = require("./routes/Complete.order.route");
const { pendingOrderRouter } = require("./routes/Pending.order.route");
const { barterFirstRouter } = require("./routes/Barter_first.route");

const app = express();
app.use(express.json());
app.use(cors({
    origin: "*"
}));

app.get("/", (req, res) => {
    res.send({ Message: "Welcome to Matching System Backend" });
});

app.use("/complete", completeOrderRouter);
app.use("/pending", pendingOrderRouter);
app.use("/barter", barterFirstRouter);

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
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const { Holding } = require("./Models/HoldingsModel");
const { Position } = require("./Models/PositionModel");
const { Order } = require("./Models/OrderModel");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

require('dotenv').config()

const app = express();

mongoose.connect(process.env.ATLASDB_URL)
    .then(() => console.log('DB Connected!'));

const corsOptions = {
    origin: ['https://easy-stock-frontend.onrender.com', 'http://localhost:5173', 'http://localhost:5174'], // Frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));
app.use(bodyParser.json()); //The json() method specifically parses incoming requests where the Content-Type is application/json. It converts the raw JSON data from the request body into a JavaScript object.
app.use(cookieParser());
app.use(express.json());




// app.get("/addPositions", async (req, res) => {
//     // await Position.deleteMany({});

//     await Position.insertMany([
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//         },
//     ]);
//     console.log("positions added successfully");
//     res.send("done");
// });

//now it will be a two step process ,1st to fetch data from database, and 2nd previously we used to render the ejs file, now we will simply return the data in json format.

app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
    let allHoldings = await Holding.find({});
    res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
    let allPosition = await Position.find({});
    res.json(allPosition);
});

app.post("/newOrder", async (req, res) => {
    let { name, qty, price, mode } = req.body;
    let newOrder = new Order({
        name: name,
        qty: qty,
        price: price,
        mode: mode
    });

    await newOrder.save();
    console.log("new Order successfull");
}
);

app.get("/allOrders", async (req, res) => {
    let allOrders = await Order.find({});
    res.json(allOrders);
});

app.listen(PORT, () => {
    console.log(`listening at port ${PORT}`);
});
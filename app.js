const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors")

const config = require("./config")

// console.log(process.env.U_SECRET_KEY);
const app = express();

// routes
const dataRouter = require("./routes/dataRoutes");
const searchRouter = require("./routes/searchRoutes");
const catchallRouter = require("./routes/catchallRoute");

// middleware

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
	req.requestTime = new Date().toISOString();
	next();
});

app.use("/api/v1/data", dataRouter);
app.use("/api/v1/search", searchRouter);
app.use("*", catchallRouter)

module.exports = app;

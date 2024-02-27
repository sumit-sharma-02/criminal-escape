const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const errorMiddleware = require("./middlewares/errors");
const cors = require("cors");
const app = express();

// Setting up config file
if (process.env.NODE_ENV !== "PRODUCTION")
  require("dotenv").config({ path: "backend/config/config.env" });

app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

// Setting up requests logs for development Environment
if (process.env.NODE_ENV !== "PRODUCTION") app.use(morgan("dev"));

app.use(
  cors({
    // origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Import all the routes here...
const cities = require("./routes/city");
const vehicles = require("./routes/vehicle");
const cops = require("./routes/cop");

app.use(`/api/v1`, cities);
app.use(`/api/v1`, vehicles);
app.use(`/api/v1`, cops);

app.get("/", (req, res) =>
  res.send(
    `<h1>Site is Working. click <a href=${process.env.FRONTEND_URL}>here</a> to visit frontend.</h1>`
  )
);

// Middleware for Error Handling
app.use(errorMiddleware);

module.exports = app;

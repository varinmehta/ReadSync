const express = require("express");
const cookieParser = require("cookie-parser");
const user = require("./routes/user");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db/connection");

const app = express();

// Connect to MongoDB
connectDB(process.env.MONGO_URL);

// Middleware setup
app.use(express.json());
app.use(cookieParser());
module.exports = app;

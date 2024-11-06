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
app.use(
    cors({
        origin: "https://read-sync-varinmehta-varin-mehtas-projects.vercel.app",
    })
); // If needed for handling CORS

// Route setup
app.use("/api", user); // Prefix routes with "/api" for consistency with Vercel's routing

// Export the app for Vercel's serverless function handler
module.exports = app;

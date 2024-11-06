const express = require("express");
const cookieParser = require("cookie-parser");
const user = require("./routes/user");
const cors = require("cors"); // Only one import here
require("dotenv").config();
const connectDB = require("./db/connection");

const app = express();

// Middleware
const corsOptions = {
    origin: [
        'https://read-sync-y4ra.vercel.app',  // Allow the deployed frontend
        'http://localhost:5173',              // Allow local frontend
    ],
    methods: ['GET', 'POST'],
    credentials: true,  // Allow sending credentials like cookies
};

app.use(cors(corsOptions));  // Apply CORS middleware globally

// Connect to the database
connectDB(process.env.MONGO_URL);

// Body parser middleware
app.use(express.json());
app.use(cookieParser());

// Define routes
app.use(user);

// Basic test route (for debugging)
app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from Vercel Serverless Function!" });
});

// Listen on port
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

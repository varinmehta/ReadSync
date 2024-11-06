const express = require("express");
const cookieParser = require("cookie-parser");
const user = require("./routes/user");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db/connection");

const app = express();

connectDB(process.env.MONGO_URL);

app.use(express.json());
app.use(cookieParser());

app.use(user);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

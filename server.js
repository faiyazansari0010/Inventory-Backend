const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./database/connection");

connectDB();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://inventory-frontend-app.netlify.app",
    ],
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser());


app.get("/", (req, res) => {
  res.status(200).send("Inventory Backend is Running");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

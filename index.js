const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const RegisterRoute = require("./routes/auth");

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connection established."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));

app.use("/api/auth", RegisterRoute);
app.listen(5000, () => {
  console.log("Backend is running");
});

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const authRoute = require("./routes/auth");
// const userRoute = require("./routes/user");

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connection established."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));

app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
app.listen(5000, () => {
  console.log("Backend is running");
});

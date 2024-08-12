const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected"))
  .catch(() => console.log("error"));
app.use(express.json());

app.use(userRoute);

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});

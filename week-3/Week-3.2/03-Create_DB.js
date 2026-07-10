const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI + "user_appNew");

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});
const user = new User({
  name: "saurav",
  email: "saurav@gmail.com",
  password: "123",
});

user.save();

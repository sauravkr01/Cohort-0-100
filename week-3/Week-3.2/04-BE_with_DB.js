const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config({
  path: __dirname + "/../../.env",
});

const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL + "App_Users");

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ email: username });
  if (existingUser) {
    return res.status(400).send("Username already exists");
  }

  //CRUD = CREATE , UPDATE , DELETE , READ
  //CREATE
  const user = new User({
    name: name,
    email: username,
    password: password,
  });

  await user.save();

  res.json({
    msg: "user created successfully",
  });
});

app.listen(3000);

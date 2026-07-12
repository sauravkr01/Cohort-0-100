const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config({
  path: __dirname + "/../../.env",
});
// require("dotenv").config();

const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

console.log("Connecting to MongoDB...");

mongoose
  .connect(MONGO_URL + "user_app")
  .then(async () => {
    console.log("DB Connected successfully! 🎉");

    const user = new User({
      name: "saurav",
      email: "saurav@gmail.com",
      password: "123",
    });

    const doc = await user.save();

    console.log("Data successfully saved! 🎉");
    console.log(doc);

    await mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error hai:", err);
  });
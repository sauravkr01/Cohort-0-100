const mongoose = require("mongoose");

mongoose.connect(
  "REMOVED_MONGODB_URI",
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

const user = new User({
    name: "saurav" , email: "saurav@gmail.com" , password: "123"
})

user.save();
const express = require("express");
const app = express();

app.get("/health-checkup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (!(username === "saurav" && password === "pass")) {
    return res.status(400).json({
      msg: "something is up with your input",
    });
  }
  if (kidneyId != "1" && kidneyId != "2") {
    return res.status(400).json({
      msg: "something is up with your input",
    });
  }
  // do something with kidneys
  res.json({
    msg: "your kidney is fine!",
  });
});
app.listen(3000);

const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyparser.json());//or direct => app.use(express.json())

app.post("/conversations", (req, res) => {
  console.log("------ New Request ------");
  console.log(req.body);

  res.send({
    msg: "2 + 2 = 4",
  });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});

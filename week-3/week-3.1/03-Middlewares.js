//  Input validations , golbal catch

const express = require("express");
const app = express();

app.use(express.json()); // to extract the body 

app.post("/health-checkup", (req, res) => {
  //kidneys = [ 1 , 2]
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;

  res.send("you have " + kidneyLength + " kidneys");
});

app.listen(3000);

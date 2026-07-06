/* Zod for input validation

Zod :-  it has big amt of input validation libaray
 */
const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());
app.use(express.json());

app.post("/health-checkup", (req, res) => {
  //kidney = [ 1 , 2]
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  if (!response.success) {
    res.status(411).json({
      msg: "input is iinvalid",
    });
  } else {
    res.send({
      response,
    });
  }
});

app.listen(3000);

//Better way to use middleware (optimised)i.e use fn call
const express  = require("express");
const app = express();

app.use(express.json());


app.listen(3000);
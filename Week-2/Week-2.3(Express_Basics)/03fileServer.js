const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.get("/files/:filename", (req, res) => {
  // from this , query can be of any name
  const name = req.params.filename;
  console.log(name);
  fs.readFile(name, "utf-8", (err, data) => {
    if (err) {
      return res.status(404).json({
        msg: "File not found",
      });
    }
    res.json({
      data
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

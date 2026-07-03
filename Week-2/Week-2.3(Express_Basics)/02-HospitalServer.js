/*Your logic is like a doctor

Learn by doing, lets create an in memory hospital

You need to create 4 routes (4 things that the hospital can do)
1. GET - User can check how many kidneys they have and their health
2. POST - User can add a new kidney
3. PUT - User can replace a kidney, make it healthy
4. DELETE - User can remove a kidney
*/

const express = require("express");

const app = express();

const port = 3000;
//mini database of user
const users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  const johnsKidneys = users[0].kidneys;
  const numberOfKidneys = johnsKidneys.length;

  let numberofHealthyKidneys = 0;
  for (let i = 0; i < johnsKidneys.length; i++) {
    if (johnsKidneys[i].healthy) {
      numberofHealthyKidneys += 1;
    }
  }

  const numberOfUnhealthyKidneys = numberOfKidneys - numberofHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberofHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});
// Add Kidneys
app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.status(201).json({
    msg: "Kidney added successfully!",
  });
});
// put Healthy Kidneys
app.put("/", (req, res) => {
  if (isThereAtleastOneUnhealthyKidney()) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      users[0].kidneys[i].healthy = true;
    }
    res.status(200).json({ msg: "All kidneys are healthy now!" });
  } else {
    res.status(411).json({
      msg: "You have no bad Kidneys",
    });
  }
});

// Remove unhealthy kidneys
// only if atleast one unhealthy kidneys otherwise return 411

function isThereAtleastOneUnhealthyKidney() {
  let atleastOneUnhealthyKidney = false;

  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastOneUnhealthyKidney = true;
    }
  }
  return atleastOneUnhealthyKidney;
}

app.delete("/", (req, res) => {
  if (isThereAtleastOneUnhealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({ msg: "Done!" });
  } else {
    res.status(411).json({
      msg: "You have no bad Kidneys",
    });
  }
});

app.listen(port);

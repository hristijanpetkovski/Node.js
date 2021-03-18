const express = require("express");
const app = express();

app.use(express.json());

let footballClubs = [
  {
    name: "Milan",
    year: 1970,
    town: "Milano",
    id: 1,
  },
  {
    name: "Juventus",
    year: 1955,
    town: "Torino",
    id: 2,
  },
  {
    name: "Monaco",
    year: 1790,
    town: "Monaco",
    id: 3,
  },
];

app
  .get("/football", (req, ress) => {
    ress.send(footballClubs);
  })
  .post("/create-team", (req, ress) => {
    footballClubs.push(req.body);

    ress.send({
      message: "You created new team",
      newTeam: req.body,
    });
  })
  .delete("/delete-club", (req, ress) => {
    footballClubs = footballClubs.filter((footballClubs) => {
      return footballClubs.name != req.body.name;
    });
    ress.send(footballClubs);
  })
  .put("/football/:id", (req, res) => {
    const clubID = req.params.id;

    const index = footballClubs.findIndex((club) => club.id == clubID);

    footballClubs[index].id = req.body.id;
    footballClubs[index].name = req.body.name;
    footballClubs[index].year = req.body.year;
    footballClubs[index].town = req.body.town;

    res.send({
      message: "Data updated successfully in put method",
      footballClubs,
    });
  })
  .patch("/football/:id", (req, res) => {
    const clubID = req.params.id;

    const index = footballClubs.findIndex((club) => club.id == clubID);
    footballClubs[index].id = req.body.id;
    footballClubs[index].name = req.body.name;
    footballClubs[index].year = req.body.year;
    footballClubs[index].town = req.body.town;

    res.send({
      message: "Data updated successfully in patch metod",
      footballClubs,
    });
  });

app.listen(3030, () => {
  console.log("this port is 3030");
});

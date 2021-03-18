const express = require("express");
const app = express();

app.use(express.json());

let books = [
  {
    name: "Broken Glass",
    author: "Alain Mabanckou",
    year: 2005,
  },
  {
    name: "I Feel Bad About My Neck",
    author: "Nora Ephron ",
    year: 2006,
  },
];

app
  .get("/books", (req, res) => {
    res.send(books);
  })
  .post("/books", (req, res) => {
    books.push(req.body);

    res.send({
      message: "You have successfully created a new book",
      books: req.body,
    });
  })
  .delete("/books", (req, res) => {
    books = books.filter((books) => {
      return books.name != req.body.name;
    });

    res.send(books);
  });

app.listen(3200, () => {
  console.log("Aplication is running on port 3200...");
});

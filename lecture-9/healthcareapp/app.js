var createError = require("http-errors"); // Importiranje na "http-errors" koj sluzat za generiranje greski vo node.js aplikacija
var express = require("express"); // Importiranje na express aplikacija
var path = require("path"); //Importiranje na path modulot koj se koristi za rabotenje so direktoriumi i pateki  so datoteki
var expressLayouts = require("express-ejs-layouts"); //Importiranje na ejs-layouts koj ni sluzi za polesno templetiranje i odrzuvanje na nasta aplikacija
var indexRouter = require("./routes/index"); // importiranje na odredena ruta??
const mongoose = require("mongoose");
var app = express();

mongoose.connect("mongodb://localhost/healthcareapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

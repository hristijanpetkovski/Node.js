var express = require("express");
var router = express.Router();
const Doctor = require("../models/doctor");
const Patient = require("../models/patients");

router
  .get("/", (req, res) => {
    res.render("index", { title: "Express" });
  })
  .get("/doctors", async (req, res) => {
    const doctors = await Doctor.find();

    res.render("doctors/index", { doctors: doctors });
  })

  .get("/doctors/create", (req, res) => {
    res.render("doctors/create");
  })
  .get("/doctors/:id", async (req, res) => {
    const doctor = await Doctor.findById(req.params.id);

    res.render("doctors/update", doctor);
  })
  .get("/patients", async (req, res) => {
    const patients = await Patient.find();

    res.render("patients/patients", { patients: patients });
  })
  .get("/patients/create", (req, res) => {
    res.render("patients/create");
  })
  .get("/patients/:id", async (req, res) => {
    const patient = await Patient.findById(req.params.id);

    res.render("patients/update", patient);
  })
  .get("/drugs", (req, res) => {
    res.render("drugs/drugs");
  })
  .get("/pharmacies", (req, res) => {
    res.render("pharmacies/pharmacies");
  })
  .post("/doctors", async (req, res) => {
    try {
      const doctor = new Doctor(req.body);
      await doctor.save();

      res.redirect("/doctors");
    } catch (error) {
      res.render("doctors/create", {
        ...req.body,
        error: error.message,
      });
    }
  })
  .post("/patients", async (req, res) => {
    try {
      const patient = new Patient(req.body);
      await patient.save();
      res.redirect("/patients");
    } catch (error) {
      res.render("patients/create", {
        ...req.body,
        error: error.message,
      });
    }
  })
  .post("/doctors/:id", async (req, res) => {
    try {
      await Doctor.findByIdAndUpdate(req.params.id, req.body);

      res.redirect("/doctors");
    } catch (error) {
      res.render("doctors/update", {
        ...req.body,
        error: error.message,
      });
    }
  })
  .post("/patients/:id", async (req, res) => {
    try {
      await Patient.findByIdAndUpdate(req.params.id, req.body);

      res.redirect("/patients");
    } catch (error) {
      res.render("patients/update", {
        ...req.body,
        error: error.message,
      });
    }
  });

module.exports = router;

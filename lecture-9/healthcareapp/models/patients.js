const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
  ssn: {
    type: String,
    required: ["SSN is a required field"],
  },
  full_name: {
    type: String,
    required: ["Full name is a required field"],
  },
  age: {
    type: String,
    required: ["Age is a required field"],
    validate: {
      validator: (value) => /^[0-9]/.test(value),
      message: (props) => `The age ${props.value} is invalid`,
    },
  },
  telephone: {
    type: String,
    required: ["Telephone number is required field"],
    unique: true,
    validate: {
      validator: (value) => /^[0-9]{9}$/.test(value),
      message: (props) => `The phone number ${props.value} is invalid`,
    },
  },
  city: {
    type: String,
    required: ["Telephone number is required field"],
  },
  doctor: {
    type: mongoose.Types.ObjectId,
    ref: "Doctor",
  },
});

module.exports = mongoose.model("Patient", patientSchema);

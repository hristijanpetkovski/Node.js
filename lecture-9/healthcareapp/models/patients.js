const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
  full_name: {
    type: String,
    required: ["Full name is a required field"],
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
});

module.exports = mongoose.model("Patient", patientSchema);

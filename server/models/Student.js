const mongoose = require("mongoose");

module.exports = mongoose.model("Student", {
  name: String,
  rollNo: String,
  attendance: Number,
  marks: Number
});

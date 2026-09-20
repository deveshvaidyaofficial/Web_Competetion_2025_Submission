const mongoose = require("mongoose");

module.exports = mongoose.model("Announcement", {
  text: String
});

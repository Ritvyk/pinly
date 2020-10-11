const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
  originalURL: {
    type: String,
    required: true,
  },
  pinlyURL: {
    type: String,
    required: true,
  },
  UID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Pinly", urlSchema);

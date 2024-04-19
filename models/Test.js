const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const clientSchema = new mongoose.Schema({
  enabled: {
    type: Boolean,
    default: true,
  },
  nom: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: false,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Test", clientSchema);

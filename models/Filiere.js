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
  duree: {
    type: Number,
    trim: true,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Filiere", clientSchema);

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const fil = require("./Filiere")
const  Filiere = mongoose.model("Filiere");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const clientSchema = new mongoose.Schema({
  enabled: {
    type: Boolean,
    default: true,
  },
  first_name: {
    type: String,
    trim: true,
    required: true,
  },
  last_name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  niveau: {
    type: Number,
    trim: true,
  },
  filiere: {
    type: ObjectId,
    ref: Filiere,
    trim: true,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Etudiant", clientSchema);

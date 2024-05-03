const mongoose = require("mongoose");
const Prof = require("./Prof");
const Etudiant = require("./Etudiant");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const noteSchema = new mongoose.Schema({
  prof: {
    type: ObjectId,
    ref: Prof,
    trim: true,
    required: true,
  },
  etudiant: {
    type: ObjectId,
    ref: Etudiant,
    trim: true,
    required: true,
  },
  note: {
    type: Number,
    required: true,
  }
});



module.exports = mongoose.model("Note", noteSchema);

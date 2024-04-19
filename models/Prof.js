const mongoose = require("mongoose");
const  Filiere = mongoose.model("Filiere");

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const clientSchema = new mongoose.Schema({
  enabled: {
    type: Boolean,
    default: true,
  },
  filiere: {
    type: String,
    trim: true,
    required: true,
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
  phone: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  filiere: {
    type: ObjectId,
    ref: Filiere,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Prof", clientSchema);

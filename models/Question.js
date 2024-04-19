const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const test = require("./Test")
const Test = mongoose.model("Test");

const clientSchema = new mongoose.Schema({
  enabled: {
    type: Boolean,
    default: true,
  },
  test:{
    type : ObjectId,
    ref: Test,
    required: true,
  },
  nom_en: {
    type: String,
    trim: true,
    required: true,
  },
  nom_fr: {
    type: String,
    trim: true,
    required: true,
  },
  nom_ar: {
    type: String,
    trim: true,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Question", clientSchema);

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const qs = require("./Question");
const Question = mongoose.model("Question");

const clientSchema = new mongoose.Schema({
  enabled: {
    type: Boolean,
    default: true,
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
  note: {
    type: Number,
    trim: true,
    required: true,
  },
  question:{
    type: ObjectId,
    ref:Question,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Option", clientSchema);
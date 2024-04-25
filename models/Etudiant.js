const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const fil = require("./Filiere")
const  Filiere = mongoose.model("Filiere");
const bcrypt = require("bcryptjs");

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
  password: {
    type: String,
    required: true,
  },
  personnalite: {
    type: String,
    trim: true,
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
// generating a hash
clientSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(), null);
};

// checking if password is valid
clientSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("Etudiant", clientSchema);

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const et = require("./Etudiant");
const  Etudiant = mongoose.model("Etudiant");

const tes = require("./Test");
const  Test = mongoose.model("Test");

const qst = require("./Question");
const Question = mongoose.model("Question");

const opt = require("./Option");
const Option = mongoose.model("Option");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const testPassedSchema = new Schema({
    testId: {
      type: ObjectId,
      ref: Test,
      required: true
    },
    questions: [
      {
        questionId: {
          type: ObjectId,
          ref: Question,
          required: true
        },
        optionId: {
          type: ObjectId,
          ref: Option,
          required: true
        }
      }
    ],
    etudiant: {
      type: ObjectId,
      ref: Etudiant,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  });
module.exports = mongoose.model("TestPassed", testPassedSchema);

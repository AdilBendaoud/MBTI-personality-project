const express = require('express');
const Test = require('../models/Test');
const Question = require('../models/Question');
const Option = require('../models/Option');
const TestPassed = require("../models/TestPassed");

exports.list = async (req, res)=>{
    try {
        const testId = req.params.testId;
        const test = await Test.findOne({ _id: testId });
        if (!test) {
            return res.status(404).json({ message: 'Test not found' });
        }

        const questions = await Question.find({ test: testId }).lean();
    
        const options = await Option.find().lean();
    
        // Map over questions and populate options for each question
        const questionsWithOptions = questions.map((question) => {
            const questionOptions = options.filter((option) =>
              option.question && option.question._id.toString() === question._id.toString()
            );
            return { ...question, options: questionOptions };
          });
    
        res.json({ success: true, result: questionsWithOptions });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

/**
 *  Creates a Single document by giving all necessary req.body fields
 *  @param {object} req.body
 *  @returns {string} Message
 */

exports.create = async (req, res) => {
    try {
      // Creating a new document in the collection
      const result = await new TestPassed(req.body).save();
      console.log(result);
      // Returning successfull response
      return res.status(200).json({
        success: true,
        result,
        message: "Successfully Created the document in Testpassed",
      });
    } catch (err) {
      // If err is thrown by Mongoose due to required validations
      if (err.name == "ValidationError") {
        return res.status(400).json({
          success: false,
          result: null,
          message: "Required fields are not supplied",
        });
      } else {
        // Server Error
        return res.status(500).json({
          success: false,
          result: null,
          message: "Oops there is an Error",
        });
      }
    }
  };
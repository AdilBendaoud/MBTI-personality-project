const mongoose = require("mongoose");
const Question = mongoose.model("Question");

/**
 *  Get all documents of a Model
 *  @param {Object} req.params
 *  @returns {Object} Results with pagination
 */

exports.list = async (req, res) => {
  const page = req.query.page || 1;
  const limit = parseInt(req.query.items) || 10;
  const skip = page * limit - limit;
  try {
    //  Query the database for a list of all results
    const resultsPromise = Question.find()
        .skip(skip)
        .limit(limit)
        .sort({ created: "desc" })
        .populate('test');
    // Counting the total documents
    const countPromise = Question.count();
    // Resolving both promises
    const [result, count] = await Promise.all([resultsPromise, countPromise]);
    // Calculating total pages
    const pages = Math.ceil(count / limit);

    // Getting Pagination Object
    const pagination = { page, pages, count };
    if (count > 0) {
      for (let Question of result) {
        Question.password = undefined;
      }
      return res.status(200).json({
        success: true,
        result,
        pagination,
        message: "Successfully found all documents",
      });
    } else {
      return res.status(203).json({
        success: false,
        result: [],
        pagination,
        message: "Collection is Empty",
      });
    }
  } catch {
    return res
      .status(500)
      .json({ success: false, result: [], message: "Oops there is an Error" });
  }
};

exports.read = async (req, res) => {
  try {
    // Find document by id
    const tmpResult = await Question.findOne({
      _id: req.params.id,
    });
    // If no results found, return document not found
    if (!tmpResult) {
      return res.status(404).json({
        success: false,
        result: null,
        message: "No document found by this id: " + req.params.id,
      });
    } else {
      // Return success resposne
      let result = {
        _id: tmpResult._id,
        enabled: tmpResult.enabled,
        email: tmpResult.email,
        name: tmpResult.name,
        surname: tmpResult.surname,
      };

      return res.status(200).json({
        success: true,
        result,
        message: "we found this document by this id: " + req.params.id,
      });
    }
  } catch {
    // Server Error
    return res.status(500).json({
      success: false,
      result: null,
      message: "Oops there is an Error",
    });
  }
};

/**
 *  Creates a Single document by giving all necessary req.body fields
 *  @param {object} req.body
 *  @returns {string} Message
 */

exports.create = async (req, res) => {
    try {
      // Creating a new document in the collection
      const result = await new Question(req.body).save();
      console.log(result);
      // Returning successfull response
      return res.status(200).json({
        success: true,
        result,
        message: "Successfully Created the document in Model",
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

/**
 *  Updates a Single document
 *  @param {object, string} (req.body, req.params.id)
 *  @returns {Document} Returns updated document
 */
exports.update = async (req, res) => {
    try {
      // Find document by id and updates with the required fields
      const result = await Question.findOneAndUpdate(
        { _id: req.params.id },
            req.body,
        {
          new: true, // return the new result instead of the old one
          runValidators: true,
        }
      ).exec();
  
      return res.status(200).json({
        success: true,
        result,
        message: "we update this document by this id: " + req.params.id,
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

  exports.delete = async (req, res) => {
    try {
      // Find the document by id and delete it
  
      // Find the document by id and delete it
      const result = await Question.findOneAndDelete({ _id: req.params.id }).exec();
      // If no results found, return document not found
      if (!result) {
        return res.status(404).json({
          success: false,
          result: null,
          message: "No document found by this id: " + req.params.id,
        });
      } else {
        return res.status(200).json({
          success: true,
          result,
          message: "Successfully Deleted the document by id: " + req.params.id,
        });
      }
    } catch {
      return res.status(500).json({
        success: false,
        result: null,
        message: "Oops there is an Error",
      });
    }
};  
exports.search = async (req, res) => {
    if (req.query.q === undefined || req.query.q === "" || req.query.q === " ") {
      return res
        .status(202)
        .json({
          success: false,
          result: [],
          message: "No document found by this request",
        })
        .end();
    }
    const fieldsArray = req.query.fields.split(",");
  
    const fields = { $or: [] };
  
    for (const field of fieldsArray) {
      fields.$or.push({ [field]: { $regex: new RegExp(req.query.q, "i") } });
    }
  
    try {
      let results = await Question.find(fields).sort({ name: "asc" }).limit(10);
      if (results.length >= 1) {
        return res.status(200).json({
          success: true,
          result: results,
          message: "Successfully found all documents",
        });
      } else {
        return res
          .status(202)
          .json({
            success: false,
            result: [],
            message: "No document found by this request",
          })
          .end();
      }
    } catch {
      return res.status(500).json({
        success: false,
        result: null,
        message: "Oops there is an Error",
      });
    }
  };
  
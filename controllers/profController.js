const mongoose = require("mongoose");
const Prof = mongoose.model("Prof");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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
    const resultsPromise = Prof.find()
        .skip(skip)
        .limit(limit)
        .sort({ created: "desc" })
        .populate('filiere');
    // Counting the total documents
    const countPromise = Prof.count();
    // Resolving both promises
    const [result, count] = await Promise.all([resultsPromise, countPromise]);
    // Calculating total pages
    const pages = Math.ceil(count / limit);

    // Getting Pagination Object
    const pagination = { page, pages, count };
    if (count > 0) {
      for (let Prof of result) {
        Prof.password = undefined;
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

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate
    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const prof = await Prof.findOne({ email: email });
    // console.log(Prof);
    if (!prof)
      return res.status(400).json({
        success: false,
        result: null,
        message: "No account with this email has been registered.",
      });

    const isMatch = await bcrypt.compare(password, prof.password);
    if (!isMatch)
      return res.status(400).json({
        success: false,
        result: null,
        message: "Invalid credentials.",
      });

    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
        id: Prof._id,
      },
      process.env.JWT_SECRET
    );

    res.json({
      success: true,
      result: {
        token,
        prof
      },
      message: "Successfully login Prof",
    });
  } catch (err) {
    // res.status(500).json({ success: false, result:null, message: err.message });
    res
      .status(500)
      .json({ success: false, result: null, message: err.message });
  }
};

exports.read = async (req, res) => {
  try {
    // Find document by id
    const tmpResult = await Prof.findOne({
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
    let { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({
        success: false,
        result: null,
        message: "Email or password fields they don't have been entered.",
      });

    const existingProf = await Prof.findOne({ email: email });

    if (existingProf)
      return res.status(400).json({
        success: false,
        result: null,
        message: "An account with this email already exists.",
      });

    if (password.length < 8)
      return res.status(400).json({
        success: false,
        result: null,
        message: "The password needs to be at least 8 characters long.",
      });

    var newProf = new Prof();
    const passwordHash = newProf.generateHash(password);
    req.body.password = passwordHash;

    const result = await new Prof(req.body).save();
    if (!result) {
      return res.status(403).json({
        success: false,
        result: null,
        message: "document couldn't save correctly",
      });
    }
    return res.status(200).send({
      success: true,
      result: {
        _id: result._id,
        enabled: result.enabled,
        email: result.email,
        first_name: result.first_name,
        last_name: result.last_name,
      },
      message: "Prof document save correctly",
    });
  } catch {
    return res.status(500).json({ success: false, message: "there is error" });
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
      const result = await Prof.findOneAndUpdate(
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
      const result = await Prof.findOneAndDelete({ _id: req.params.id }).exec();
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
      let results = await Prof.find(fields).sort({ name: "asc" }).limit(10);
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
  
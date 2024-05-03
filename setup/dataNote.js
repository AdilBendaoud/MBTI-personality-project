require("dotenv").config({ path: __dirname + "/../.variables.env" });
const fs = require("fs");

const mongoose = require('mongoose');
const Etudiant = require('../models/Etudiant'); // Update path to your Etudiant model
const Prof = require('../models/Prof'); // Update path to your Prof model
const Note = require('../models/Note'); // Update path to your Note model

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise;
// Generate random data
const generateRandomData = async () => {
  const data = [];
  const grades = [1, 2, 3, 4, 5];
  const numRecords = 50;

  // Fetch all students and professors
  const students = await Etudiant.find();
  console.log(students);
  const professors = await Prof.find();
  console.log(professors);
    // Create a map of professors by field
    const professorsByField = new Map();
    professors.forEach(prof => {
        const fieldString = prof.filiere.toString();
        if (!professorsByField.has(fieldString)) {
            professorsByField.set(fieldString, []);
        }
        professorsByField.get(fieldString).push(prof);
    });

  // Generate random data for each student
  students.forEach(student => {
    const fieldString = student.filiere.toString();
    const availableProfessors = professorsByField.get(fieldString);
    const randomProfessor = availableProfessors[Math.floor(Math.random() * availableProfessors.length)];
  
    if (randomProfessor) {
      const randomGrade = grades[Math.floor(Math.random() * grades.length)];
      data.push({
        etudiant: student._id,
        prof: randomProfessor._id,
        note: randomGrade,
      });
    }
  });

  return data;
};

// Insert random data into the database
const insertRandomData = async () => {
  try {
    const randomData = await generateRandomData();
    console.log(randomData);
    await Note.insertMany(randomData);
    console.log('Random data inserted successfully.');
   } catch (error) {
    console.error('Error inserting random data:', error);
  }
};

insertRandomData();
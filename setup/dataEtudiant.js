require("dotenv").config({ path: __dirname + "/../.variables.env" });
const fs = require("fs");

const Etudiant = require("../models/Etudiant");
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise;

const filieres = [
  "662a7ff659c9dd4bf85b56ef", 
  "662a801c59c9dd4bf85b56f3", 
  "6633d483b7f13002b42e6a99", 
  "6633d4a6b7f13002b42e6a9b", 
  "6633d4bbb7f13002b42e6a9d"];

const generateRandomMBTIPersonality = () => {
  const mbtiTypes = ["ISTJ", "ISFJ", "INFJ", "INTJ", "ISTP", "ISFP", "INFP", "INTP", "ESTP", "ESFP", "ENFP", "ENTP", "ESTJ", "ESFJ", "ENFJ", "ENTJ"];
  const randomIndex = Math.floor(Math.random() * mbtiTypes.length);
  return mbtiTypes[randomIndex];
};

const generateRandomStudent = (filiereId) => {
  const baseEmail = "student@example.com";
  const randomString = Math.random().toString(36).substring(7);
  const email = baseEmail.replace("example", randomString);
  return {
    first_name: "John",
    last_name: "Doe",
    email: email,
    password: "secretPassword",
    personnalite: generateRandomMBTIPersonality(),
    niveau: 5,
    filiere: filiereId,
  };
};

const studentsToAdd = [];

for (let i = 0; i < 50; i++) {
  const randomFiliereIndex = Math.floor(Math.random() * filieres.length);
  const randomFiliereId = filieres[randomFiliereIndex];
  studentsToAdd.push(generateRandomStudent(randomFiliereId));
}

const addStudents = async () => {
  for (const studentData of studentsToAdd) {
    const newStudent = new Etudiant(studentData);
    try {
      await newStudent.save();
      console.log(`Student ${studentData.first_name} ${studentData.last_name} added successfully!`);
    } catch (err) {
      console.error(`Error saving student ${studentData.first_name} ${studentData.last_name}:`, err);
    }
  }
};

// Call the function to add students
addStudents();

require("dotenv").config({ path: __dirname + "/../.variables.env" });
const fs = require("fs");

const Etudiant = require("../models/Prof");
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise;

// Array of filieres
const filieres = [
  "662a7ff659c9dd4bf85b56ef", 
  "662a801c59c9dd4bf85b56f3", 
  "6633d483b7f13002b42e6a99", 
  "6633d4a6b7f13002b42e6a9b", 
  "6633d4bbb7f13002b42e6a9d"
];

// Function to generate a random phone number
const generateRandomPhone = () => {
  const digits = "0123456789";
  let phoneNumber = "+";
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    phoneNumber += digits[randomIndex];
  }
  return phoneNumber;
};

// Function to generate random Prof data
const generateRandomProf = () => {
  const randomFiliereIndex = Math.floor(Math.random() * filieres.length);
  return {
    first_name: "John", // You can change this to generate different first names
    last_name: "Doe", // You can change this to generate different last names
    phone: generateRandomPhone(),
    email: `prof${Math.floor(Math.random() * 10000)}@example.com`, // Generates a random email
    password: "secretPassword", // You can generate random passwords if needed
    filiere: filieres[randomFiliereIndex], // Assigns a random filiere to the professor
  };
};

const profsToAdd = [];

for (let i = 0; i < 20; i++) {
  profsToAdd.push(generateRandomProf());
}

const addProf = async () => {
  for (const profData of profsToAdd) {
    const newStudent = new Etudiant(profData);
    try {
      await newStudent.save();
      console.log(`prof ${profData.first_name} ${profData.last_name} added successfully!`);
    } catch (err) {
      console.error(`Error saving prof ${profData.first_name} ${studentData.last_name}:`, err);
    }
  }
};

addProf();
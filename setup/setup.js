require("dotenv").config({ path: __dirname + "/../.variables.env" });
const fs = require("fs");

const mongoose = require("mongoose");
mongoose.connect("mongodb://adilbendaoud:U8cn85DT7G42Kpdj@ac-ae0kj0j-shard-00-00.myvs8co.mongodb.net:27017,ac-ae0kj0j-shard-00-01.myvs8co.mongodb.net:27017,ac-ae0kj0j-shard-00-02.myvs8co.mongodb.net:27017/?ssl=true&replicaSet=atlas-3e80pk-shard-0&authSource=admin&retryWrites=true&w=majority&appName=PFA", { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises

// import all of our models - they need to be imported only once

// const patients = JSON.parse(
//   fs.readFileSync(__dirname + "/patients.json", "utf-8")
// );

// async function deleteData() {
//   console.log("😢😢 Goodbye Data...");
//   await Patient.remove();
//   console.log(
//     "Data Deleted. To load sample data, run\n\n\t npm run sample\n\n"
//   );
//   process.exit();
// }

// async function loadData() {
//   try {
//     await Item.insertMany(patients);
//     console.log("👍👍👍👍👍👍👍👍 Done!");
//     process.exit();
//   } catch (e) {
//     console.log(
//       "\n👎👎👎👎👎👎👎👎 Error! The Error info is below but if you are importing sample data make sure to drop the existing database first with.\n\n\t npm run blowitallaway\n\n\n"
//     );
//     console.log(e);
//     process.exit();
//   }
// }

async function createAdmin() {
  try {
    const Admin = require("../models/Admin");
    var newAdmin = new Admin();
    const passwordHash = newAdmin.generateHash("123456");

    const ad = await new Admin({
      email: "admin@demo.com",
      password: passwordHash,
      name: "admin",
      surname: "demo",
    });
    await Admin.create(ad);
    console.log("👍👍👍👍👍👍👍👍 Admin created : Done!");
    process.exit();
  } catch (e) {
    console.log("\n👎👎👎👎👎👎👎👎 Error! The Error info is below");
    console.log(e);
    process.exit();
  }
}
createAdmin();
// if (process.argv.includes("--delete")) {
//   deleteData();
// } else {
//   loadData();
// }

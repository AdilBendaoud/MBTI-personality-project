const express = require("express");
const { catchErrors } = require("../handlers/errorHandlers");

const router = express.Router();

const adminController = require("../controllers/adminController");
const clientController = require("../controllers/clientController");

const leadController = require("../controllers/leadController");
const productController = require("../controllers/productController");

const profController = require("../controllers/profController");
const filiereController = require("../controllers/filiereController");
const etudiantController = require("../controllers/etudiantController");
const questionController = require("../controllers/questionController");
const optionController = require("../controllers/optionController");
const testController = require("../controllers/testController");
const etudiantTestController = require("../controllers/etudiantTestController");
const noteController = require("../controllers/noteController");

//_______________________________ Admin management_______________________________

router.route("/admin/create").post(catchErrors(adminController.create));
router.route("/admin/read/:id").get(catchErrors(adminController.read));
router.route("/admin/update/:id").patch(catchErrors(adminController.update));
router.route("/admin/delete/:id").delete(catchErrors(adminController.delete));
router.route("/admin/search").get(catchErrors(adminController.search));
router.route("/admin/list").get(catchErrors(adminController.list));

router
  .route("/admin/password-update/:id")
  .patch(catchErrors(adminController.updatePassword));
//list of admins ends here

//_____________________________________ API for clients __________________________
router.route("/client/create").post(catchErrors(clientController.create));
router.route("/client/read/:id").get(catchErrors(clientController.read));
router.route("/client/update/:id").patch(catchErrors(clientController.update));
router.route("/client/delete/:id").delete(catchErrors(clientController.delete));
router.route("/client/search").get(catchErrors(clientController.search));
router.route("/client/list").get(catchErrors(clientController.list));

//_____________________________________ API for profs __________________________
router.route("/prof/create").post(catchErrors(profController.create));
router.route("/prof/read/:id").get(catchErrors(profController.read));
router.route("/prof/update/:id").patch(catchErrors(profController.update));
router.route("/prof/delete/:id").delete(catchErrors(profController.delete));
router.route("/prof/search").get(catchErrors(profController.search));
router.route("/prof/list").get(catchErrors(profController.list));
router.route("/prof/login").post(catchErrors(profController.login));

//_____________________________________ API for filieres __________________________
router.route("/filiere/create").post(catchErrors(filiereController.create));
router.route("/filiere/read/:id").get(catchErrors(filiereController.read));
router.route("/filiere/update/:id").patch(catchErrors(filiereController.update));
router.route("/filiere/delete/:id").delete(catchErrors(filiereController.delete));
router.route("/filiere/search").get(catchErrors(filiereController.search));
router.route("/filiere/list").get(catchErrors(filiereController.list));

//_____________________________________ API for etudiants __________________________
router.route("/etudiant/create").post(catchErrors(etudiantController.create));
router.route("/etudiant/read/:id").get(catchErrors(etudiantController.read));
router.route("/etudiant/login").post(catchErrors(etudiantController.login));
router.route("/etudiant/update/:id").patch(catchErrors(etudiantController.update));
router.route("/etudiant/delete/:id").delete(catchErrors(etudiantController.delete));
router.route("/etudiant/search").get(catchErrors(etudiantController.search));
router.route("/etudiant/list").get(catchErrors(etudiantController.list));

//_____________________________________ API for questions __________________________
router.route("/question/create").post(catchErrors(questionController.create));
router.route("/question/read/:id").get(catchErrors(questionController.read));
router.route("/question/update/:id").patch(catchErrors(questionController.update));
router.route("/question/delete/:id").delete(catchErrors(questionController.delete));
router.route("/question/search").get(catchErrors(questionController.search));
router.route("/question/list").get(catchErrors(questionController.list));
router.route("/question/listAll").get(catchErrors(questionController.listAll));

//_____________________________________ API for options  __________________________
router.route("/option/create").post(catchErrors(optionController.create));
router.route("/option/read/:id").get(catchErrors(optionController.read));
router.route("/option/update/:id").patch(catchErrors(optionController.update));
router.route("/option/delete/:id").delete(catchErrors(optionController.delete));
router.route("/option/search").get(catchErrors(optionController.search));
router.route("/option/list").get(catchErrors(optionController.list));

//_____________________________________ API for test  __________________________
router.route("/test/create").post(catchErrors(testController.create));
router.route("/test/read/:id").get(catchErrors(testController.read));
router.route("/test/update/:id").patch(catchErrors(testController.update));
router.route("/test/delete/:id").delete(catchErrors(testController.delete));
router.route("/test/search").get(catchErrors(testController.search));
router.route("/test/list").get(catchErrors(testController.list));

//_____________________________________ API for Test des etudiants  __________________________
router.route("/etudiantTest/:testId").get(catchErrors(etudiantTestController.list));
router.route("/etudiantTest/").post(catchErrors(etudiantTestController.create));

//_____________________________________ API for leads ___________________________
router.route("/lead/create").post(catchErrors(leadController.create));
router.route("/lead/read/:id").get(catchErrors(leadController.read));
router.route("/lead/update/:id").patch(catchErrors(leadController.update));
router.route("/lead/delete/:id").delete(catchErrors(leadController.delete));
router.route("/lead/search").get(catchErrors(leadController.search));
router.route("/lead/list").get(catchErrors(leadController.list));

//_____________________________________ API for products ___________________________
router.route("/product/create").post(catchErrors(productController.create));
router.route("/product/read/:id").get(catchErrors(productController.read));
router
  .route("/product/update/:id")
  .patch(catchErrors(productController.update));
router
  .route("/product/delete/:id")
  .delete(catchErrors(productController.delete));
router.route("/product/search").get(catchErrors(productController.search));
router.route("/product/list").get(catchErrors(productController.list));



// Note api

router.route("/note/create").post(catchErrors(noteController.create));

module.exports = router;
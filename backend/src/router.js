const express = require("express");

const multer = require("multer");

const upload = multer({ dest: "public/tmp/" });

const { signinSchema, loginSchema } = require("./middleware/user");

const {
  ItemController,
  SectorController,
  FieldController,
  StudentLevelController,
  WorkforceController,
  StageController,
  LanguageController,
  ImageController,
  CompanyController,
  SchoolController,
  UserController,
  CompanyProjectController,
  AuthController,
  UploadController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

// auth routes

router.post("/login", loginSchema, AuthController.login);
router.post("/signin", signinSchema, AuthController.signin);

// Upload routes

router.post("/upload", upload.single("myfile"), UploadController.upload);

// Routes to get infos on fixed tables
router.get("/sectors", SectorController.browse);
router.get("/sectors/:id", SectorController.read);
router.get("/fields", FieldController.browse);
router.get("/fields/:id", FieldController.read);
router.get("/levels", StudentLevelController.browse);
router.get("/levels/:id", StudentLevelController.read);
router.get("/workforces", WorkforceController.browse);
router.get("/workforces/:id", WorkforceController.read);
router.get("/stages", StageController.browse);
router.get("/stages/:id", StageController.read);
router.get("/languages", LanguageController.browse);
router.get("/languages/:id", LanguageController.read);

router.get("/images", ImageController.browse);
router.get("/images/:id", ImageController.read);

router.get("/companies", CompanyController.browse);
router.get("/companies/:id", CompanyController.read);
// créer / modifier / supprimer une entreprise

router.get("/schools", SchoolController.browse);
router.get("/schools/:id", SchoolController.read);
router.put("/schools/:id", SchoolController.edit);
router.post("/schools", SchoolController.add);
router.delete("/schools/:id", SchoolController.delete);
// créer / modifier / supprimer une école

router.get("/users/", UserController.browse);
router.get("/users/:id", UserController.read);

//
// ******* Companies *************

// récupèrer globalement tous les projets de toutes les entreprises ou un projet spécifique
router.get("/company-projects/", CompanyProjectController.browse);
router.get("/company-projects/:id", CompanyProjectController.read);

// récupérer les projects de companies en fonction de l'user connecté

// créer un projet d'entreprise + le modifier

//
// ******* Schools **************

//  récupère globalement tous les projets de toutes les schools ou un projet spécifique

// récupérer les projects de schools en fonction de l'user connecté

// créer un projet/ressources d'école + le modifier

module.exports = router;

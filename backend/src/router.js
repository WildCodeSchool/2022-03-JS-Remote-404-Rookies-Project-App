const express = require("express");
const multer = require("multer");

const upload = multer({ dest: "public/tmp/" });

const { signinSchema, loginSchema } = require("./middleware/user");

const { uploadPublic } = require("./middleware/upload");

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
  ProfileController,
  SchoolRessourcesController,
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

// router.post("/upload", upload.single("image_url"), UploadController.upload);

// Routes to get infos on fixed tables
router.get("/sectors", SectorController.browse);
router.get("/sectors/:id", SectorController.read);
router.get("/fields", FieldController.browse);
router.get("/fields/:id", FieldController.read);
router.get("/project-fields/:id", FieldController.findManyCompany);
router.get("/ressource-fields/:id", FieldController.findManySchool);
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
router.post(
  "/companies/",
  upload.single("images_url"),
  uploadPublic,
  CompanyController.add
);
router.put(
  "/companies/:id",
  upload.single("images_url"),
  uploadPublic,
  CompanyController.edit
);
// créer / modifier / supprimer une entreprise

router.get("/schools", SchoolController.browse);
router.get("/schools/:id", SchoolController.read);

router.delete("/schools/:id", SchoolController.delete);

router.post(
  "/schools/",
  upload.single("image_url"),
  uploadPublic,
  SchoolController.add
);
router.put(
  "/schools/:id",
  upload.single("image_url"),
  uploadPublic,
  SchoolController.edit
);

// créer / modifier / supprimer une école

router.get("/users/", UserController.browse);
router.get("/users/:id", UserController.read);

router.get("/profiles/", ProfileController.browse);
router.put(
  "/profiles/:id",
  upload.single("image_url"),
  uploadPublic,
  ProfileController.edit
);

//
// ******* Companies *************

// récupèrer globalement tous les projets de toutes les entreprises ou un projet spécifique
router.get("/company-projects/", CompanyProjectController.browse);
router.get("/company-projects/:id", CompanyProjectController.read);
router.get(
  "/company-projects/company/:id",
  CompanyProjectController.browseCompany
);
router.post("/company-projects/:userId", CompanyProjectController.create);
router.put(
  "/company-projects/match/:srId/:cpId",
  CompanyProjectController.match
);
router.put(
  "/company-projects/stages/:stId/:cpId",
  CompanyProjectController.changeStage
);

// modifier un projet d'entreprise

//
// ******* Schools **************

//  récupère globalement tous les projets de toutes les schools ou un projet spécifique
router.get("/school-ressources/", SchoolRessourcesController.browse);
router.get("/school-ressources/:id", SchoolRessourcesController.read);
router.get(
  "/school-ressources/school/:id",
  SchoolRessourcesController.browseSchool
);
router.post("/school-ressources/:userId", SchoolRessourcesController.create);
router.put(
  "/school-ressources/stages/:stId/:srId",
  SchoolRessourcesController.changeStage
);

// modifier un projet/ressources d'école

module.exports = router;

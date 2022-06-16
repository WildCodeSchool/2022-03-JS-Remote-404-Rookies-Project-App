const express = require("express");

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
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

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

router.get("/schools", SchoolController.browse);
router.get("/schools/:id", SchoolController.read);
router.get("/schools/:id", SchoolController.edit);
router.get("/schools", SchoolController.add);
router.get("/schools/:id", SchoolController.delete);

module.exports = router;

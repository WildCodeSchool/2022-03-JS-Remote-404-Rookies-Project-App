const fs = require("fs");
require("dotenv").config();
const models = require("../models");

const uploadPublic = async (req, res, next) => {
  fs.rename(req.file.path, `public/avatars/${req.file.originalname}`, (err) => {
    if (err) {
      res.status(400).send("Error while uploading");
    } else {
      models.images
        .insert(req.file.originalname)
        .then((image) => {
          req.image = {
            id: image[0].insertId,
            url: `/public/avatars/${req.file.originalname}`,
          };

          next();
        })
        .catch((error) => {
          console.error(error);
          res.status(500).send("error while saving avatar");
        });
    }
  });
};

module.exports = { uploadPublic };

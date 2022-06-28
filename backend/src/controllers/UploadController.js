/* const fs = require("fs");
require("dotenv").config();
const models = require("../models");

class UploadController {
  static upload = async (req, res) => {
  
   try {
    if(req.file) {

      const err = await fs.rename(req.file.path, `public/avatars/${req.file.originalname}`)
      if (err) {
       return res.status(400).send("Error while uploading");
      }
      const image = await   models.images
      .insert(req.file.originalname)
    }
    // faire l'update du profil a partir des informations  récupérés par le body
    // on envoie toujours le formdata   => si pas de fichier  on envoie le body sans le fichier
    //sinon on envoie  tous

  }


   fs.rename(
      req.file.path,
      `public/avatars/${req.file.originalname}`,
      (err) => {
        if (err) {
          res.status(400).send("Error while uploading");
        } else {
          models.images
            .insert(req.file.originalname)
            .then((image) => {
              console.log(image);

              res.status(200).json({
                msg: "Avatar uploaded successfully",
                url: `http://localhost:5000/public/avatars/${req.file.originalname}`,
              });
            })
            .catch((error) => {
              console.error(error);
              res.status(500).send("error while saving avatar");
            });
        }
      }
    );
  };
}
}

module.exports = UploadController; */

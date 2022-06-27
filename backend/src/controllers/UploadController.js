const fs = require("fs");
require("dotenv").config();

class UploadController {
  static upload = (req, res) => {
    fs.rename(
      req.file.path,
      `public/avatars/${req.file.originalname}`,
      (err) => {
        if (err) {
          res.status(400).send("Error while uploading");
        } else {
          res.status(200).json({
            msg: "Avatar uploaded successfully",
            url: `http://localhost:5000/public/avatars/${req.file.originalname}`,
          });
        }
      }
    );
  };
}

module.exports = UploadController;

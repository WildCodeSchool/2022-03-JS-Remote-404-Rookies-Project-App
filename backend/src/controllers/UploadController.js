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
          res.status(203).json({
            msg: "Avatar uploaded successfully",
            url: `${process.env.VITE_BACKEND_URL}/public/avatars/${req.file.originalname}`,
          });
        }
      }
    );
  };
}

module.exports = UploadController;

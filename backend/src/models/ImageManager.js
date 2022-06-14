const AbstractManager = require("./AbstractManager");

class ImageManager extends AbstractManager {
  static table = "images";
}

module.exports = ImageManager;

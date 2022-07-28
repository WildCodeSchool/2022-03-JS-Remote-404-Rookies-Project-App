const AbstractManager = require("./AbstractManager");

class ImageManager extends AbstractManager {
  static table = "images";

  insert(name) {
    return this.connection.query(
      `INSERT INTO ${ImageManager.table} (image_url, image_alt) VALUES ( ?, ?)`,
      [`/public/avatars/${name}`, `avatars ${name} `]
    );
  }
}

module.exports = ImageManager;

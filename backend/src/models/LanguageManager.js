const AbstractManager = require("./AbstractManager");

class LanguageManager extends AbstractManager {
  static table = "languages";
}

module.exports = LanguageManager;

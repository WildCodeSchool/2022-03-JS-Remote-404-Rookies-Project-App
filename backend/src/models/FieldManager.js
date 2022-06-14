const AbstractManager = require("./AbstractManager");

class FieldManager extends AbstractManager {
  static table = "teaching_fields";
}

module.exports = FieldManager;

const AbstractManager = require("./AbstractManager");

class StudentLevelManager extends AbstractManager {
  static table = "student_levels";
}

module.exports = StudentLevelManager;

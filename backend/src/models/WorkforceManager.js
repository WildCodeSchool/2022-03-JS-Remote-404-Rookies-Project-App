const AbstractManager = require("./AbstractManager");

class WorkforceManager extends AbstractManager {
  static table = "workforces";
}

module.exports = WorkforceManager;

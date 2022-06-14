const AbstractManager = require("./AbstractManager");

class CompaniesManager extends AbstractManager {
  static table = "companies";
}

module.exports = CompaniesManager;

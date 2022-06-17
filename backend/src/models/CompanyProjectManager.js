const AbstractManager = require("./AbstractManager");

class CompanyProjectManager extends AbstractManager {
  static table = "company_project";

  find(id) {
    return this.connection.query(
      `SELECT * FROM ${this.table} INNER JOIN stages ON stages.id = ${this.table}.stages_id WHERE ${this.table}.id = ?`,
      [id]
    );
  }
}

module.exports = CompanyProjectManager;

const AbstractManager = require("./AbstractManager");

class CompanyManager extends AbstractManager {
  static table = "companies";

  find(id) {
    return this.connection.query(
      `SELECT * FROM ${this.table} INNER JOIN sectors ON sectors.id = ${this.table}.sectors_id INNER JOIN workforces ON workforces.id = ${this.table}.workforces_id INNER JOIN images ON images.id = ${this.table}.images_id WHERE ${this.table}.id = ?`,
      [id]
    );
  }
}

module.exports = CompanyManager;

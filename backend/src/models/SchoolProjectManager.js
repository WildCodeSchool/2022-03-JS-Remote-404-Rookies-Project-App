const AbstractManager = require("./AbstractManager");

class SchoolProjectManager extends AbstractManager {
  static table = "school_ressources";

  find(id) {
    return this.connection.query(
      `SELECT * FROM ${this.table} INNER JOIN profiles ON profiles.id = ${this.table}.profiles_id INNER JOIN workforces ON workforces.id = ${this.table}.workforces_id INNER JOIN sectors ON sectors.id = ${this.table}.sectors_id INNER JOIN schools ON schools.id = ${this.table}.schools_id WHERE ${this.table}.id = ?`,
      [id]
    );
  }
}

module.exports = SchoolProjectManager;

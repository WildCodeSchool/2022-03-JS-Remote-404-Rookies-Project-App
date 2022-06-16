const AbstractManager = require("./AbstractManager");

class CompanyManager extends AbstractManager {
  static table = "companies";

  find(id) {
    let query = `SELECT * FROM ${this.table} `;
    if (this.table.sectors_id)
      query += `INNER JOIN sectors ON sectors.id = ${this.table}.sectors_id `;
    if (this.table.workforces_id)
      query += `INNER JOIN workforces ON workforces.id = ${this.table}.workforces_id `;
    if (this.table.images_id)
      query += `INNER JOIN images ON images.id = ${this.table}.images_id `;
    return this.connection.query(`${query}WHERE ${this.table}.id = ?`, [id]);
  }
}

module.exports = CompanyManager;

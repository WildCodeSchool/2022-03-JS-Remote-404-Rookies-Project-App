const { v4: uuidv4 } = require("uuid");
const AbstractManager = require("./AbstractManager");

class CompanyManager extends AbstractManager {
  static table = "companies";

  find(id) {
    return this.connection.query(
      `SELECT * FROM ${this.table} INNER JOIN sectors ON sectors.id = ${this.table}.sectors_id INNER JOIN workforces ON workforces.id = ${this.table}.workforces_id INNER JOIN images ON images.id = ${this.table}.images_id WHERE ${this.table}.id = ?`,
      [id]
    );
  }

  addOne(newData) {
    const Uuid = uuidv4();
    return this.connection
      .query(
        `INSERT INTO ${this.table} ( id, name, description, website, sectors_id, images_id, workforces_id ) VALUES ( ? , ? , ? , ? , ? , ? , ? )`,
        [
          Uuid,
          newData.company_name,
          newData.description,
          newData.website,
          newData.sectors_id,
          newData.images_id,
          newData.worforces_id,
        ]
      )
      .then(() => Uuid)
      .catch(() => console.warn("Couldn't create the company"));
  }
}

module.exports = CompanyManager;

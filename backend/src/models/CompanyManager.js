const { v4: uuidv4 } = require("uuid");
const AbstractManager = require("./AbstractManager");

class CompanyManager extends AbstractManager {
  static table = "companies";

  find(id) {
    return this.connection.query(
      `SELECT * FROM ${this.table} WHERE ${this.table}.id = ?`,
      [id]
    );
  }

  addOne(newData) {
    const range = parseInt(newData.range, 10);
    const sector = parseInt(newData.sector, 10);
    const uuid = uuidv4();
    return this.connection
      .query(
        `INSERT INTO ${this.table} ( id, name, description, website, sectors_id, images_id, workforces_id ) VALUES ( ? , ? , ? , ? , ? , ? , ? )`,
        [
          uuid,
          newData.company_name,
          newData.description,
          newData.website,
          sector,
          newData.images_id,
          range,
        ]
      )
      .then(() => uuid)
      .catch((err) => console.warn(err));
  }

  edit(newData, id) {
    return this.connection.query(`UPDATE ${this.table} ? WHERE id = ?`, [
      newData,
      id,
    ]);
  }
}

module.exports = CompanyManager;

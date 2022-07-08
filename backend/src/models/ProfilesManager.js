const AbstractManager = require("./AbstractManager");

class ProfilesManager extends AbstractManager {
  static table = "profiles";

  findAll() {
    return this.connection.query(
      `SELECT * FROM ${this.table} JOIN users on profiles.user_id = users.id`
    );
  }

  find(id) {
    return this.connection
      .query(
        `SELECT *, users.id FROM ${this.table} JOIN users on profiles.user_id = users.id LEFT JOIN images ON images.id = ${this.table}.images_id WHERE ${this.table}.user_id = ?`,
        [id]
      )
      .then((res) => res);
  }

  insert(profile, id) {
    return this.connection.query(
      `INSERT INTO ${this.table} (firstname, lastname, phone, entity_category_id, user_id, is_admin) VALUES ( ?, ?, ? , ? , ? , ? )`,
      [
        profile.firstname,
        profile.lastname,
        profile.phone,
        profile.entity_category_id,
        id,
        1,
      ]
    );
  }

  modifyEntity(entId, id) {
    return this.connection.query(`UPDATE ${this.table} SET ? WHERE id = ?`, [
      entId,
      id,
    ]);
  }

  update(profile, id) {
    return this.connection.query(`UPDATE ${this.table}  SET ? WHERE id = ?`, [
      profile,
      id,
    ]);
  }
}

module.exports = ProfilesManager;

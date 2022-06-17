const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "profiles";

  findAll() {
    return this.connection.query(
      `SELECT * FROM ${this.table} INNER JOIN users ON users.id = ${this.table}.user_id INNER JOIN images ON images.id = ${this.table}.images_id`
    );
  }

  find(id) {
    return this.connection.query(
      `SELECT * FROM ${this.table} INNER JOIN users ON users.id = ${this.table}.user_id INNER JOIN images ON images.id = ${this.table}.images_id WHERE ${this.table}.id = ?`,
      [id]
    );
  }
}

module.exports = UserManager;

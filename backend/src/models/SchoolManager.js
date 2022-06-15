const AbstractManager = require("./AbstractManager");

class SchoolManager extends AbstractManager {
  static table = "schools";

  find(id) {
    if (this.table.images_id)
      return this.connection.query(
        `select * from ${this.table} INNER JOIN images ON images.id = ${this.table}.images_id WHERE ${this.table}.id = ?`,
        [id]
      );
    return this.connection.query(
      `select * from ${this.table} WHERE ${this.table}.id = ?`,
      [id]
    );
  }

  insert(school) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [school.title]
    );
  }

  update(school) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [school.title, school.id]
    );
  }
}

module.exports = SchoolManager;

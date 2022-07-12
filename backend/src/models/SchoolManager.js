const { v4: uuidv4 } = require("uuid");
const AbstractManager = require("./AbstractManager");

class SchoolManager extends AbstractManager {
  static table = "schools";

  find(id) {
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

  addOne(newData) {
    const uuid = uuidv4();
    return this.connection
      .query(
        `INSERT INTO ${this.table} ( id, name, description, website, images_id, campuses ) VALUES ( ? , ? , ? , ? , ? , ? )`,
        [
          uuid,
          newData.name,
          newData.description,
          newData.website,
          newData.images_id,
          newData.campus,
        ]
      )
      .then(() => uuid)
      .catch((err) => console.warn(err));
  }

  edit(newData, id) {
    return this.connection.query(`UPDATE ${this.table} SET ? WHERE id = ?`, [
      newData,
      id,
    ]);
  }
}

module.exports = SchoolManager;

const AbstractManager = require("./AbstractManager");

class SchoolRessourcesTeachingFieldsManager extends AbstractManager {
  static table = "school_project_has_teaching_field";

  addMany(projectId, fields) {
    const keywordsId = fields.map((e) => e);
    const result = keywordsId.map(async (id) => {
      await this.connection.query(
        `INSERT INTO ${this.table} (school_project_id, teaching_field_id) VALUES (?, ?)`,
        [projectId, id]
      );
    });
    return result;
  }
}

module.exports = SchoolRessourcesTeachingFieldsManager;

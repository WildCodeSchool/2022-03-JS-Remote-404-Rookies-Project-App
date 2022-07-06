const AbstractManager = require("./AbstractManager");

class CompanyProjectTeachingFieldsManager extends AbstractManager {
  static table = "company_project_has_teaching_fields";

  addMany(projectId, fields) {
    const keywordsId = fields.map((e) => e);
    const result = keywordsId.map(async (id) => {
      await this.connection.query(
        `INSERT INTO ${this.table} (company_project_id, teaching_fields_id) VALUES (?, ?)`,
        [projectId, id]
      );
    });
    return result;
  }
}

module.exports = CompanyProjectTeachingFieldsManager;

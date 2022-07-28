const AbstractManager = require("./AbstractManager");

class TeachingFieldsManager extends AbstractManager {
  static table = "teaching_fields";

  findRessources(ressourceId) {
    return this.connection.query(
      `SELECT * FROM ${this.table} INNER JOIN school_project_has_teaching_field ON school_project_has_teaching_field.teaching_field_id = ${this.table}.id WHERE school_project_has_teaching_field.school_project_id = ?`,
      [ressourceId]
    );
  }

  findProjects(projectId) {
    return this.connection.query(
      `SELECT * FROM ${this.table} INNER JOIN company_project_has_teaching_fields ON company_project_has_teaching_fields.teaching_fields_id = ${this.table}.id WHERE company_project_id = ?`,
      [projectId]
    );
  }
}

module.exports = TeachingFieldsManager;

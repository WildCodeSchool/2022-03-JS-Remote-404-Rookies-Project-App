const AbstractManager = require("./AbstractManager");

class SchoolRessourcesLanguagesManager extends AbstractManager {
  static table = "school_projects_has_languages";

  addMany(projectId, languages) {
    const languagesId = languages.map((e) => e);
    const result = languagesId.map(async (id) => {
      await this.connection.query(
        `INSERT INTO ${this.table} (school_projects_id, languages_id) VALUES (?, ?)`,
        [projectId, id]
      );
    });
    return result;
  }
}

module.exports = SchoolRessourcesLanguagesManager;

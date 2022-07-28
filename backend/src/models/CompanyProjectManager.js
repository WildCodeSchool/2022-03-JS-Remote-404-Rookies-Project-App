const { v4: uuidv4 } = require("uuid");
const AbstractManager = require("./AbstractManager");

const addZeroOnDate = (num) => {
  if (num.length < 2) return `0${num}`;
  return num;
};

const getFormatDate = (date) => {
  const stringDate = new Date(date);
  const month = addZeroOnDate(stringDate.getMonth() + 1);
  const day = addZeroOnDate(stringDate.getDate());
  return `${stringDate.getFullYear()}-${month}-${day}`;
};

class CompanyProjectManager extends AbstractManager {
  static table = "company_project";

  find(id) {
    return this.connection.query(
      `SELECT *, company_project.id FROM ${this.table} LEFT JOIN stages ON stages.id = ${this.table}.stages_id WHERE ${this.table}.id = ?`,
      [id]
    );
  }

  findAllFromCompany(id) {
    return this.connection.query(
      `SELECT *, company_project.id FROM ${this.table} LEFT JOIN stages ON stages.id = ${this.table}.stages_id WHERE ${this.table}.companies_id = ?`,
      [id]
    );
  }

  addOne(newData, companyId, profileId) {
    const Uuid = uuidv4();

    return this.connection
      .query(
        `INSERT INTO ${this.table} (id, project_types_id, end_date, project_name, goal, ressources_available, profiles_id, stages_id, companies_id ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ? )`,
        [
          Uuid,
          newData.project_types_id,
          getFormatDate(newData.end_date),
          newData.project_name,
          newData.goal,
          newData.ressources_available,
          profileId,
          2,
          companyId,
        ]
      )
      .then(() => Uuid);
  }

  connect(schoolRessourcesId, companyProjectId) {
    return this.connection.query(
      `UPDATE ${this.table} SET school_ressources_id = ? WHERE id = ?`,
      [schoolRessourcesId, companyProjectId]
    );
  }

  changeStage(stageId, companyProjectId) {
    return this.connection.query(
      `UPDATE ${this.table} SET stages_id = ? WHERE id = ?`,
      [stageId, companyProjectId]
    );
  }
}

module.exports = CompanyProjectManager;

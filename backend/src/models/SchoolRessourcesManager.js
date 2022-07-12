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

class SchoolRessourcesManager extends AbstractManager {
  static table = "school_ressources";

  find(id) {
    return this.connection.query(
      `SELECT * FROM ${this.table} WHERE ${this.table}.id = ?`,
      [id]
    );
  }

  findAllFromSchool(id) {
    return this.connection.query(
      `SELECT *, school_ressources.id FROM ${this.table} LEFT JOIN stages ON stages.id = ${this.table}.stages_id WHERE ${this.table}.schools_id = ?`,
      [id]
    );
  }

  addOne(newData, schoolId, profileId) {
    const Uuid = uuidv4();
    const range = parseInt(newData.range, 10);
    const sector = parseInt(newData.sector, 10);
    const weekTime = parseInt(newData.weekly_time_dedicated, 10);
    const isGrouped = newData.group_size > 1 ? 1 : 0;
    return this.connection
      .query(
        `INSERT INTO ${this.table} (id, course, training, student_level_id, campus, student_workforce, is_grouped, group_size, group_quantity, weekly_time_dedicated, objectives, mission_examples, submission_date, start_date, end_date, ideal_location, commitment, profiles_id, workforces_id, sectors_id, remote, schools_id, full, stages_id ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )`,
        [
          Uuid,
          newData.course,
          newData.training,
          newData.level,
          newData.campus,
          newData.student_workforce,
          isGrouped,
          newData.group_size,
          newData.group_quantity,
          weekTime,
          newData.objectives,
          newData.mission_examples,
          getFormatDate(newData.submission_date),
          getFormatDate(newData.start_date),
          getFormatDate(newData.end_date),
          newData.ideal_location,
          newData.commitment,
          profileId,
          range,
          sector,
          newData.remote,
          schoolId,
          0,
          2,
        ]
      )
      .then(() => Uuid);
  }

  changeStage(stageId, schoolRessourcesId) {
    return this.connection.query(
      `UPDATE ${this.table} SET stages_id = ? WHERE id = ?`,
      [stageId, schoolRessourcesId]
    );
  }
}

module.exports = SchoolRessourcesManager;

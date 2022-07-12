const models = require("../models");

class SchoolRessourcesController {
  static browse = (req, res) => {
    models.school_ressources
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browseSchool = (req, res) => {
    models.school_ressources
      .findAllFromSchool(req.params.id)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.school_ressources
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static create = async (req, res) => {
    try {
      const profile = await models.profiles
        .find(req.params.userId)
        .then((result) => result[0]);

      let schoolId = "";
      if (!profile[0].school_id) {
        const tempId = await models.schools
          .addOne(req.body)
          .then((schId) => schId);
        schoolId += tempId;
      } else {
        schoolId += profile[0].school_id;
      }

      if (!profile.school_id) {
        await models.profiles.modifyEntity(
          { school_id: schoolId },
          req.params.userId
        );
      }

      const project = await models.school_ressources.addOne(
        req.body,
        schoolId,
        profile[0].id
      );

      if (project) {
        await models.school_project_has_teaching_field.addMany(
          project,
          req.body.teaching_fields
        );
        await models.school_projects_has_languages.addMany(
          project,
          req.body.languages
        );
        return res.status(201).send(project);
      }
      return res.status(400).send("Couldn't create project");
    } catch (err) {
      console.error(err);
      return res
        .status(401)
        .send("Something bad happened, try again Hackerman !");
    }
  };

  static changeStage = (req, res) => {
    models.school_ressources
      .changeStage(req.params.stId, req.params.srId)
      .then((rows) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.status(200).send("Stage changed");
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = SchoolRessourcesController;

const models = require("../models");

class CompanyProjectController {
  static browse = (req, res) => {
    models.company_project
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browseCompany = (req, res) => {
    models.company_project
      .findAllFromCompany(req.params.id)
      .then(([rows]) => {
        res.send(rows[0]);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.company_project
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
      const profile = await models.profiles.find(req.params.userId);
      const companyId = !profile.company_id
        ? await models.companies
            .addOne(req.body)
            .then((compId) =>
              models.profiles
                .modify({ company_id: compId }, req.params.userId)
                .then(() => compId)
            )
        : await models.companies.edit(profile.company_id);

      const project = await models.company_project.addOne(
        req.body,
        companyId,
        profile[0].id
      );

      if (project) {
        await models.company_project_has_teaching_fields.addMany(
          project,
          req.body.teaching_fields
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
}

module.exports = CompanyProjectController;

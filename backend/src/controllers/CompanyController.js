const models = require("../models");

class CompanyController {
  static browse = (req, res) => {
    models.companies
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.companies
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

  static edit = (req, res) => {
    const companies = JSON.parse(req.body.company);
    delete companies.images_url;
    if (!req.file) {
      models.companies
        .edit(companies, req.params.id)
        .then(() => {
          res.status(200).json(req.body);
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send("error updating company");
        });
    } else {
      models.companies
        .edit({ ...companies, images_id: req.image.id }, req.params.id)
        .then(() => {
          res.status(200).json(req.body);
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send("error updating company");
        });
    }
  };

  static add = (req, res) => {
    const companies = JSON.parse(req.body.company);
    const userId = JSON.parse(req.body.user_id);
    delete companies.image_url;
    if (!req.file) {
      models.companies
        .createOne(companies)
        .then((companiesId) => {
          models.profiles
            .modifyEntity({ company_id: companiesId }, userId)
            .then(() => {
              res.status(200).json({ ...companies, company_id: companiesId });
            })
            .catch((err) => {
              console.error(err);
              res.status(500).send("internal error");
            });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send("error while adding a new company");
        });
    } else {
      models.companies
        .createOne({ ...companies, images_id: req.image.id })
        .then((companiesId) => {
          models.profiles
            .modifyEntity({ company_id: companiesId }, userId)
            .then(() => {
              res.status(200).json({ ...companies, company_id: companiesId });
            })
            .catch((err) => {
              console.error(err);
              res.status(500).send("internal error");
            });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send("error while adding a new company");
        });
    }
  };
}

module.exports = CompanyController;

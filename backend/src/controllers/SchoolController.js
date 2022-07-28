const models = require("../models");

class SchoolController {
  static browse = (req, res) => {
    models.schools
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
    models.schools
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
    const schools = JSON.parse(req.body.schools);

    delete schools.image_url;
    delete schools.campus;
    if (!req.file) {
      models.schools
        .edit(schools, req.params.id)
        .then(() => {
          res.status(200).json(req.body);
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send("error while updating school");
        });
    } else {
      models.schools
        .edit({ ...schools, images_id: req.image.id }, req.params.id)
        .then(() => {
          res.status(200).json(req.body);
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send("error while updating school");
        });
    }
  };

  static add = (req, res) => {
    const schools = JSON.parse(req.body.schools);
    const userId = JSON.parse(req.body.user_id);

    delete schools.image_url;
    delete schools.campus;
    if (!req.file) {
      models.schools
        .createOne(schools)
        .then((schoolsId) => {
          models.profiles
            .modifyEntity({ school_id: schoolsId }, userId)
            .then(() => {
              res.status(200).json({ ...schools, school_id: schoolsId });
            })
            .catch((err) => {
              console.error(err);
              res.status(500).send("internal error");
            });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send("error while adding a new school");
        });
    } else {
      models.schools
        .createOne({ ...schools, images_id: req.image.id })
        .then((schoolsId) => {
          models.profiles
            .modifyEntity({ school_id: schoolsId }, userId)
            .then(() => {
              res.status(200).json({ ...schools, school_id: schoolsId });
            })
            .catch((err) => {
              console.error(err);
              res.status(500).send("internal error");
            });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send("error while adding a new school");
        });
    }
  };

  static delete = (req, res) => {
    models.school
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = SchoolController;

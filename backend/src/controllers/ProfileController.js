const models = require("../models");

class ProfileController {
  static browse = (req, res) => {
    models.profiles
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
    models.profiles
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
    const user = JSON.parse(req.body.user);
    delete user.image_url;
    if (!req.file) {
      models.profiles
        .update(user, req.params.id)
        .then(() => {
          res.status(200).json(user);
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send("error updating profile");
        });
    } else {
      models.profiles
        .update({ ...user, images_id: req.image.id }, req.params.id)
        .then(() => {
          res.status(200).json({ ...user, image_url: req.image.url });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send("error updating profile");
        });
    }
  };
}

module.exports = ProfileController;

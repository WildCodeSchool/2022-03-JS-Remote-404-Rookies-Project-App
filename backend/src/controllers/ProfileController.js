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
    console.log("profilecontroller.edit");
    console.log(req.body);
    console.log(req.image);
    console.log(req.file);

    res.status(200).send("hello world");
  };
}

module.exports = ProfileController;

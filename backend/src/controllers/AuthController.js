const argon2 = require("argon2");

const jwt = require("jsonwebtoken");

const models = require("../models");

require("dotenv").config();

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (plainPassword) => {
  return argon2.hash(plainPassword, hashingOptions);
};

const verifyPassword = (password, hashedPassword) => {
  return argon2.verify(hashedPassword, password);
};

class AuthController {
  static signin = async (req, res) => {
    const { email, password } = req.body;

    try {
      const hash = await hashPassword(password);

      const newUser = await models.users.insert({
        email,
        hashedpassword: hash,
      });

      await models.profiles.insert(req.body, newUser[0].insertId);

      res.status(201).json({ email: req.body.email, id: newUser[0].insertId });
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  };

  static login = async (req, res) => {
    try {
      const userExist = await models.users.findOne(req.body.email);
      if (!userExist) {
        return res
          .status(400)
          .send({ error: "Invalid Credentials, please retry" });
      }

      const validPass = await verifyPassword(
        req.body.password,
        userExist.hashedpassword
      );
      if (!validPass) {
        return res.status(400).send("Email or Password is wrong");
      }

      const profile = await models.profiles.find(userExist.id);
      delete profile.id;

      const token = jwt.sign(
        {
          email: userExist.email,
          id: userExist.id,
          type: profile[0].entity_category_id,
        },
        process.env.PRIVATETOKEN
      );
      return res
        .status(201)
        .cookie("user_token", token, {
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        })
        .json({ ...profile[0], email: userExist.email, id: userExist.id });
    } catch (err) {
      console.error(err);
      return res.status(401).send(err);
    }
  };
}

module.exports = AuthController;

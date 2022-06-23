const argon2 = require("argon2");

const { v4: uuidv4 } = require("uuid");

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
      const id = uuidv4();
      await models.users.insert({
        id,
        email,
        hashedpassword: hash,
      });

      await models.profiles.insert(req.body, id);

      res.status(201).json("user created successfully ");
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
        return res.status(400).send({ error: "Email or Password is wrong" });
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
          role: profile.is_admin,
          type: profile.entity_category_id,
        },
        process.env.PRIVATETOKEN
      );
      return res
        .status(201)
        .cookie("user_token", token, {
          httpOnly: true,
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        })
        .json({ ...profile, email: userExist.email, id: userExist.id });
    } catch (err) {
      console.error(err);
      return res.status(401).send(err);
    }
  };
}

module.exports = AuthController;

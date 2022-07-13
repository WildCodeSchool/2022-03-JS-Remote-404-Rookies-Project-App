const Joi = require("joi");
const jwt = require("jsonwebtoken");

const signinSchema = (req, res, next) => {
  const { error } = Joi.object({
    entity_category_id: Joi.number().integer().required(),

    firstname: Joi.string().min(3).max(30).required(),

    lastname: Joi.string().min(3).max(30).required(),

    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "fr"] },
    }),
    phone: Joi.string().required(),

    password: Joi.string().min(8).max(25).required(),
  }).validate(req.body, { abortEarly: false });

  if (!error) {
    next();
  } else {
    res.status(400).json(error);
  }
};

const loginSchema = (req, res, next) => {
  const { error } = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "fr"] },
    }),

    password: Joi.string().min(8).max(25).required(),
  }).validate(req.body, { abortEarly: false });

  if (!error) {
    next();
  } else {
    res.status(400).json(error);
  }
};

const checkAuth = (req, res, next) => {
  if (req.cookies) {
    jwt.verify(
      req.cookies.user_token,
      process.env.PRIVATETOKEN,
      (err, decode) => {
        if (err) {
          res.status(401).send("You don t have the correct rights");
        } else {
          req.user = decode;
          next();
        }
      }
    );
  } else {
    res.status(401).send("You don t have the correct rights");
  }
};

module.exports = {
  checkAuth,
  signinSchema,
  loginSchema,
};

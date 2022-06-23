const Joi = require("joi");

const signinSchema = (req, res, next) => {
  const { error } = Joi.object({
    entity_category_id: Joi.number().integer().required(),

    firstname: Joi.string().alphanum().min(3).max(30).required(),

    lastname: Joi.string().alphanum().min(3).max(30).required(),

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

module.exports = {
  signinSchema,
  loginSchema,
};

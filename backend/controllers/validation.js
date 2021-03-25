const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    courses: Joi.required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(4).required(),
    image:Joi.string(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(4).required(),
  });

  return schema.validate(data);
};

module.exports = { registerValidation, loginValidation };

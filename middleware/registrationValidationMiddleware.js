const Joi = require('joi');

export default (req, res, next) => {
  const validateRequest = (request) => {
    const schema = {
      email: Joi.string().email().min(3).required().trim(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,300}$/),
    };
    return Joi.validate(request, schema);
  };
  const { error } = validateRequest(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  next();
};
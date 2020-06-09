const Joi = require('joi');

module.exports = Joi.object().keys({
  name: Joi.string().alphanum().min(2).max(128).required(),
  description: Joi.string().required(),
  rating: Joi.number().integer().min(0).max(5).required()
});

const Joi = require('joi');

module.exports = Joi.number().integer().min(1).required();

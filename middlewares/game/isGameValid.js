const Joi = require('joi');

const {
  responseStatusCodeEnum: {BAD_REQUEST},
  responseCustomErrorEnum: {NOT_VALID}
} = require('../../constants');
const {ErrorHandler} = require('../../errors');
const {gameValidator: {gameSchema}} = require('../../validators');


module.exports = async (req, res, next) => {
  try {
    const game = req.body;
    const {error} = Joi.validate(game, gameSchema);

    if (error) return next(new ErrorHandler(error.details[0].message, BAD_REQUEST, NOT_VALID.customCode));

    req.game = game;

    next();
  } catch (e) {
    next(e);
  }
};

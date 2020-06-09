const Joi = require('joi');

const {responseStatusCodeEnum: {BAD_REQUEST}, responseCustomErrorEnum: {NOT_VALID}} = require('../../constants');
const {ErrorHandler} = require('../../errors');
const {gameValidator: {gameIdSchema}} = require('../../validators');


module.exports = async (req, res, next) => {
  const {gameId} = req.params;
  const {error} = Joi.validate(gameId, gameIdSchema);

  if (error) return next(new ErrorHandler(error.details[0].message, BAD_REQUEST, NOT_VALID.customCode));

  req.gameId = gameId;

  next();
}

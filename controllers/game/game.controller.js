const {
  responseStatusCodeEnum: {CREATED, NO_CONTENT, OK, NOT_FOUND: NOT_FOUND_CODE},
  responseCustomErrorEnum: {NOT_CREATED, NOT_GET, NOT_UPDATE, NOT_DELETE}
} = require('../../constants');
const {ErrorHandler} = require('../../errors');
const {gameService} = require('../../services');
const {gameHelpers: {gameFilterQueryBuilder}} = require('../../helpers');


module.exports = {
  create: async (req, res, next) => {
    try {
      const isCreated = await gameService.create(req.game);

      if (!isCreated) return next(new ErrorHandler(NOT_CREATED.message, NOT_FOUND_CODE, NOT_CREATED.customCode));

      res.sendStatus(CREATED);
    } catch (e) {
      next(e);
    }
  },


  getAll: async (req, res, next) => {
    try {
      const query = gameFilterQueryBuilder(req.query);
      const [games] = await gameService.getAll(query)

      if (!games.length) return next(new ErrorHandler(NOT_GET.message, NOT_FOUND_CODE, NOT_GET.customCode));

      res.json(games);
    } catch (e) {
      next(e);
    }
  },

  update: async (req, res, next) => {
    try {
      const [isUpdated] = await gameService.update(req.gameId, req.game);

      if (!isUpdated.affectedRows) return next(new ErrorHandler(NOT_UPDATE.message, NOT_FOUND_CODE, NOT_UPDATE.customCode));

      res.json(OK);
    } catch (e) {
      next(e);
    }
  },

  delete: async (req, res, next) => {
    try {
      const [isDeleted] = await gameService.delete(req.gameId);

      if (!isDeleted.affectedRows) return next(new ErrorHandler(NOT_DELETE.message, NOT_FOUND_CODE, NOT_DELETE.customCode));

      res.sendStatus(NO_CONTENT);
    } catch (e) {
      next(e);
    }
  },

  getOne: async (req, res, next) => {
    try {
      const [game] = await gameService.getOne(req.gameId);

      if (!game.length) return next(new ErrorHandler(NOT_GET.message, NOT_FOUND_CODE, NOT_GET.customCode));

      res.json(...game);
    } catch (e) {
      next(e);
    }
  }
};

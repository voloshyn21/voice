const gameRouter = require('express').Router();

const {gameController} = require('../../controllers');
const {gameMiddleware: {isGameValid, isGameExist}} = require('../../middlewares');


gameRouter.get('/', gameController.getAll);
gameRouter.post('/', isGameValid, gameController.create);

gameRouter.use('/:gameId', isGameExist);

gameRouter.get('/:gameId', gameController.getOne);
gameRouter.put('/:gameId', isGameValid, gameController.update);
gameRouter.delete('/:gameId', gameController.delete);


module.exports = gameRouter;

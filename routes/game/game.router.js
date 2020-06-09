const gameRouter = require('express').Router();

const {gameController} = require('../../controllers');
const {gameMiddlewares: {isGameValid, isGameExist}} = require('../../middlewares');


gameRouter.post('/add', isGameValid, gameController.create);

gameRouter.use('/:gameId', isGameExist);

gameRouter.post('/:gameId/update', isGameValid, gameController.update);
gameRouter.post('/:gameId/delete', gameController.delete);
gameRouter.get('/:gameId', gameController.getOne);


module.exports = gameRouter;

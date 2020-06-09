const router = require('express').Router();

const {gameController, notFoundController} = require('../controllers');
const gameRouter = require('./game/game.router');


router.use('/game', gameRouter);
router.get('/games', gameController.getAll);


router.use('/', notFoundController);

router.use('*', (err, req, res, next) => res.status(err.status).json({
  message: err.message,
  code: err.customCode
}));


module.exports = router;

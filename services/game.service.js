const db = require('./../dataBase');

module.exports = {
  create: (game) => db.execute(`INSERT INTO games(name, description, rating)
                                VALUES (?, ?, ?)`, [game.name, game.description, game.rating]),

  getAll: (queryFilter) => db.query(queryFilter),

  getOne: (id) => db.execute(`SELECT *
                              FROM games
                              WHERE id = ?`, [id]),

  delete: (id) => db.execute(`DELETE
                              FROM games
                              where id = ?`, [id]),

  update: (id, game) => db.execute(`UPDATE games
                                    SET name        = ?,
                                        description = ?,
                                        rating      = ?
                                    WHERE id = ?`, [game.name, game.description, game.rating, id])

}

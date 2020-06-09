/*
  GAME FILTER QUERY BUILDER

  EXAMPLE URL FOR FILTER:
  http://localhost:3000/games?name=pikachu
  http://localhost:3000/games?rating=5
  http://localhost:3000/games?rating=3,4&name=digimon
  http://localhost:3000/games?rating=3,4,5&name=digimon
  http://localhost:3000/games?id=10,11&name=pikachu,digimon&rating=4,5
  http://localhost:3000/games?id=10,11&name=pikachu,digimon&rating=4,5&description=digimon

  IF FILTER IS EMPTY — GET ALL
*/

function addParams(queryParams, query) {
  if (queryParams.id) {
    const queryId = queryParams.id.split(',').map(id => `'${id}'`)
    query += ` id IN (${queryId}) AND`;
  }

  if (queryParams.name) {
    const queryName = queryParams.name.split(',').map(name => `'${name}'`)
    query += ` name IN (${queryName}) AND`;
  }

  if (queryParams.description) {
    const queryDescription = queryParams.description.split(',').map(description => `'${description}'`)
    query += ` description IN (${queryDescription}) AND`;
  }

  if (queryParams.rating) {
    const queryRating = queryParams.rating.split(',').map(rating => `'${rating}'`)
    query += ` rating IN (${queryRating}) AND`;
  }

  if (query.slice(-4) === ' AND') {
    query = query.slice(0, -4);
  }

  return query;
}

module.exports = (queryParams) => {
  let query = `SELECT * FROM games WHERE`;

  if (Object.keys(queryParams).length !== 0) return addParams(queryParams, query);

  if (query.slice(-6) === ' WHERE') query = query.slice(0, -6);

  return query;
};

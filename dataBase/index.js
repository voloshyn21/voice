const mysql = require('mysql2');

const {
  DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_WAITFORCONNECTIONS, DB_CONNECTIONLIMIT, DB_QUEUELIMIT
} = require('../configs');


const pool = mysql.createPoolPromise({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  waitForConnections: DB_WAITFORCONNECTIONS,
  connectionLimit: DB_CONNECTIONLIMIT,
  queueLimit: DB_QUEUELIMIT
});


module.exports = pool;

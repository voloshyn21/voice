module.exports = {
  PORT: process.env.PORT || 3000,

  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_USER: process.env.DB_USER || 'root',
  DB_PASSWORD: process.env.DB_PASSWORD || 'root',
  DB_DATABASE: process.env.DB_DATABASE || 'game',
  DB_WAITFORCONNECTIONS: process.env.DB_WAITFORCONNECTION || true,
  DB_CONNECTIONLIMIT: process.env.DB_CONNECTIONLIMIT || 50,
  DB_QUEUELIMIT: process.env.DB_QUEUELIMIT || 0
};

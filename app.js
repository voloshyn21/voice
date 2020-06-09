require('dotenv').config();

const express = require('express');

const {PORT} = require('./configs');

const app = express();

app.use(express.json());
app.use(express.urlencoded());


const router = require('./routes');


app.use(router);


app.listen(PORT, () => console.log(`Server was started on port: ${PORT}`));

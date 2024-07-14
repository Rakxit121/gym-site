const express = require('express');
const cors = require('cors');
const { json, urlencoded } = require('body-parser');
const routes = require('./routes');
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api', routes);

app.use(errorHandler);

module.exports = app;

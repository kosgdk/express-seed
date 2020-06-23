const debug = require('debug')('app');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

debug('bootstrapping application');

const config = require('./config');
const logger = require('./config/logger');
const routes = require('./routes');

const app = express();

// app.use(morgan(config.env.HTTP_LOG_CONFIG, { stream: logger.stream }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(routes);

app.post('/', function(req, res) {
  res.redirect(307, 'http://google.com');
});

app.get('/', function(req, res) {
  res.redirect(307, 'http://yandex.ru');
});

module.exports = app;

/* eslint-disable no-console */
const express = require('express');

const server = express();

server.use(express.json());
server.use(logger);

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} request from ${req.url}`
  );
  next();
}

function errorHandler(error, req, res) {
  console.log('ERROR', error);
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}

server.use(errorHandler);

module.exports = server;

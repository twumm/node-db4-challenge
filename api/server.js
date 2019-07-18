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

module.exports = server;
// src/server.js — fixture for dsh-stackdecoder
const { handleRequest } = require('./handler.js');

function start() {
  try {
    handleRequest('/api/users');
  } catch (e) {
    console.error('Crashed:', e);
    process.exit(1);
  }
}

start();

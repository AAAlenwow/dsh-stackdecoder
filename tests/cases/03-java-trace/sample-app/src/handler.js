// src/handler.js — fixture for dsh-stackdecoder
function getUserById(id) {
  if (id == null) {
    throw new TypeError('id is required');  // <-- bug location
  }
  return { id, name: 'mock' };
}

function handleRequest(path) {
  const id = null;  // intentionally null to trigger the throw
  return getUserById(id);
}

module.exports = { handleRequest, getUserById };

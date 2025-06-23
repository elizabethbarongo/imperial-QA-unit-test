// /userRoleManagement.js

function login(email, password) {
    if (email === 'admin@recycleco.com' && password === 'adminpass') {
      return { token: 'valid-token', role: 'admin' };
    } else if (email === 'user@recycleco.com' && password === 'userpass') {
      return { token: 'valid-token', role: 'user' };
    }
    return null;
  }
  
  function getUserRole(token) {
    return token === 'valid-token' ? 'admin' : null;
  }
  
  module.exports = { login, getUserRole };
  
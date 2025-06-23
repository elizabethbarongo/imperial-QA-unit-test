const login = require('./login');
test('returns admin user object for correct admin credentials', () => {
  const result = login('admin@recycleco.com', 'adminpass');
  expect(result).toHaveProperty('token', 'valid-token');
  expect(result).toHaveProperty('role', 'admin');
});
test('returns user object for correct user credentials', () => {
  const result = login('user@recycleco.com', 'userpass');
  expect(result).toHaveProperty('token', 'valid-token');
  expect(result).toHaveProperty('role', 'user');
});
test('returns null for incorrect credentials', () => {
  const result = login('wrong@recycleco.com', 'wrongpass');
  expect(result).toBeNull();
});
test('returns null for empty credentials', () => {
  const result = login('', '');
  expect(result).toBeNull();
});
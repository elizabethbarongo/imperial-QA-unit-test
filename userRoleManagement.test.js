const { login, getUserRole } = require('./userRoleManagement');

test('login returns token and role for valid admin', () => {
  const result = login('admin@recycleco.com', 'adminpass');
  expect(result).toHaveProperty('token');
  expect(result.role).toBe('admin');
});

test('login returns token and role for valid user', () => {
  const result = login('user@recycleco.com', 'userpass');
  expect(result).toHaveProperty('token');
  expect(result.role).toBe('user');
});

test('login returns null for invalid credentials', () => {
  const result = login('wrong@recycleco.com', 'nopass');
  expect(result).toBeNull();
});

test('getUserRole returns role for valid token', () => {
  expect(getUserRole('valid-token')).toBe('admin');
});

test('getUserRole returns null for invalid token', () => {
  expect(getUserRole('invalid-token')).toBeNull();
});

const signup = require('./signup');
test('returns user object when all fields are valid and passwords match', () => {
  const result = signup('Muriithi', 'wmuriithi.com', 'password123', 'password123');
  expect(result).toHaveProperty('firstName', 'Muriithi');
  expect(result).toHaveProperty('email', 'wmuriithi@gmail.com');
  expect(result).toHaveProperty('userId');
});
test('returns null when firstName is missing', () => {
  const result = signup('', 'wmuriithi@gmail.com', 'password123', 'password123');
  expect(result).toBeNull();
});
test('returns null when passwords do not match', () => {
  const result = signup('Alice', 'wmuriithi@gmail.com', 'password123', 'wrongpass');
  expect(result).toBeNull();
});
test('returns null when any field is missing', () => {
  expect(signup('Muriithi', '', 'password123', 'password123')).toBeNull();
  expect(signup('Muriithi', 'wmuriithi@gmail.com', '', 'password123')).toBeNull();
  expect(signup('Muriithi', 'wmuriithi@gmail.com', 'password123', '')).toBeNull();
});
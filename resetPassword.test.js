const resetPassword = require('./resetPassword');
test('returns true for a valid email', () => {
  expect(resetPassword('user@example.com')).toBe(true);
});
test('returns false for an empty email', () => {
  expect(resetPassword('')).toBe(false);
});
test('returns false for an invalid email (no @)', () => {
  expect(resetPassword('userexample.com')).toBe(false);
});
test('returns false for a non-string input', () => {
  expect(resetPassword(null)).toBe(false);
  expect(resetPassword(undefined)).toBe(false);
  expect(resetPassword(12345)).toBe(false);
});
realTimeWasteTracking.test.js

const fetchLiveWasteData = require('./realTimeWasteTracking');
test('returns waste data with locations and timestamp', () => {
  const data = fetchLiveWasteData();
  expect(data).toHaveProperty('locationA');
  expect(data).toHaveProperty('timestamp');
  expect(typeof data.timestamp).toBe('string');
});
test('waste amounts are positive numbers', () => {
  const data = fetchLiveWasteData();
  Object.keys(data).forEach(key => {
    if (key !== 'timestamp') {
      expect(data[key]).toBeGreaterThanOrEqual(0);
    }
  });
});
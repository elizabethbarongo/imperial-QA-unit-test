const { generateReport, sendNotification } = require('./automatedReporting');

test('generateReport returns report with valid period and URL', () => {
  const report = generateReport('2025-06');
  expect(report.period).toBe('2025-06');
  expect(report.reportUrl).toMatch(/\.pdf$/);
});

test('generateReport throws error if period missing', () => {
  expect(() => generateReport()).toThrow('Period required');
});

test('sendNotification returns true for valid message', () => {
  expect(sendNotification('Report ready')).toBe(true);
});

test('sendNotification returns false for empty message', () => {
  expect(sendNotification('')).toBe(false);
});

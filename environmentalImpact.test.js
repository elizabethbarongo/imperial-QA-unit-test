const getEnvironmentalMetrics = require('./environmentalImpact');
test('returns CO2, water, and energy savings as positive numbers', () => {
  const metrics = getEnvironmentalMetrics();
  expect(metrics.co2SavedTonnes).toBeGreaterThan(0);
  expect(metrics.waterSavedLiters).toBeGreaterThan(0);
  expect(metrics.energySavedKWh).toBeGreaterThan(0);
});

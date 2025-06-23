const { nextOnboardingStep, prevOnboardingStep } = require('./onboarding');
test('nextOnboardingStep returns next step if not finished', () => {
  expect(nextOnboardingStep(1, 3)).toBe(2);
  expect(nextOnboardingStep(2, 3)).toBe(3);
});
test('nextOnboardingStep returns "complete" if at last step', () => {
  expect(nextOnboardingStep(3, 3)).toBe('complete');
  expect(nextOnboardingStep(5, 5)).toBe('complete');
});
test('nextOnboardingStep returns null for invalid input', () => {
  expect(nextOnboardingStep('a', 3)).toBeNull();
  expect(nextOnboardingStep(1, 'b')).toBeNull();
});
test('prevOnboardingStep returns previous step if greater than 1', () => {
  expect(prevOnboardingStep(3)).toBe(2);
  expect(prevOnboardingStep(2)).toBe(1);
});
test('prevOnboardingStep returns 1 if already at first step', () => {
  expect(prevOnboardingStep(1)).toBe(1);
  expect(prevOnboardingStep(0)).toBe(1);
});
test('prevOnboardingStep returns null for invalid input', () => {
  expect(prevOnboardingStep('a')).toBeNull();
  expect(prevOnboardingStep()).toBeNull();
});
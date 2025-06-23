function nextOnboardingStep(currentStep, totalSteps) {
    if (typeof currentStep !== 'number' || typeof totalSteps !== 'number') return null;
    if (currentStep < totalSteps) {
      return currentStep + 1;
    }
    return 'complete';
  }
//    Returns the previous step number, or 1 if already at the first step.
  function prevOnboardingStep(currentStep) {
    if (typeof currentStep !== 'number') return null;
    if (currentStep > 1) {
      return currentStep - 1;
    }
    return 1;
  }
  module.exports = { nextOnboardingStep, prevOnboardingStep };
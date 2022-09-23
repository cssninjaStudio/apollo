export function wizard(steps) {
  return {
    currentStep: 0,
    maxSteps: steps,
    nextStep() {
      if (this.currentStep < this.maxSteps) {
        this.currentStep = this.currentStep + 1
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep = this.currentStep - 1
      }
    },
  }
}

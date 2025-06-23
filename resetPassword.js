//  Simulates a reset password service.
//  Returns true if the email is valid (contains "@"), otherwise returns false.
function resetPassword(email) {
    if (!email) return false;
    // Simple validation: check for @ symbol
    if (typeof email === 'string' && email.includes('@')) {
      // Simulate sending reset email
      return true;
    }
    return false;
  }
  module.exports = resetPassword;





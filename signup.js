function signup(firstName, email, password, confirmPassword) {
    if (!firstName || !email || !password || !confirmPassword) {
      return null;
    }
    if (password !== confirmPassword) {
      return null;
    }
   
    return {
      firstName,
      email,
      userId: 'user-' + Math.floor(Math.random() * 10000)
    };
  }
  module.exports = signup;
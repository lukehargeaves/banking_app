module.exports = RegisterValidation = (
  username,
  email,
  password,
  confirmPassword,
  duplicateUser
) => {
  const errors = {};

  if (!!duplicateUser) {
    errors.username = "Incorrect credentials";
  }
  if (username.trim === "") {
    errors.username = "Username is empty";
  }
  if (email.trim === "") {
    errors.email = "Email is empty";
  }
  if (password.length < 8) {
    errors.password = "Password is less than 8 characters";
  }

  if (password !== confirmPassword) {
    errors.password = "Passwords do not match";
  }
  return errors;
};

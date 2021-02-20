module.exports = LoginValidation = (username, password) => {
  const errors = {};
  if (username.trim === "") {
    errors.username = "Username is empty";
  }
  if (password.length < 8) {
    errors.password = "Password is less than 8 characters";
  }
  return errors;
};

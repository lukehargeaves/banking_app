const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  id: String,
  username: String,
  password: String,
  email: String,
  token: String,
});

module.exports = model("User", userSchema);

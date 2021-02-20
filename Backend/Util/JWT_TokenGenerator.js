const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
module.exports = (res, expiresIn = "1h") =>
  jwt.sign(
    {
      id: res.id,
      email: res.email,
      username: res.username,
    },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

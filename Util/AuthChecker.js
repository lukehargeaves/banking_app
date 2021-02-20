const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const { AuthenticationError } = require("apollo-server");

module.exports = async (context) => {
  const authHeader = context.req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split("Bearer ")[1];

    if (!!token) {
      try {
        const user = jwt.verify(token, SECRET_KEY);
        return user;
      } catch (e) {
        throw new AuthenticationError("Invalid token");
      }
    }
    throw new Error("Authentication token not valid");
  }
  throw new Error("No Token Found");
};

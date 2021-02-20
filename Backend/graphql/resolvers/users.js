const Users = require("../../models/Users");
const bcrypt = require("bcrypt");
const { UserInputError } = require("apollo-server");
const registerValidation = require("../../Util/RegistrationValidation");
const loginValidation = require("../../Util/LoginValidation");
const JWT_TokenGenerator = require("../../Util/JWT_TokenGenerator");
const authChecker = require("../../Util/AuthChecker");
module.exports = {
  Query: {
    async getUsers() {
      try {
        const users = await Users.find();
        return users;
      } catch (e) {
        throw new Error(e);
      }
    },
  },
  Mutation: {
    async login(_, { username, password }, context) {
      authChecker(context);
      const errors = loginValidation(username, password);
      const user = await Users.findOne({ username });
      if (!user) {
        errors.credentials = "Invalid username or password";
      }
      const correctPassword = await bcrypt.compare(password, user.password);

      if (!!Object.values(errors).length) {
        throw new UserInputError("Validation Errors", {
          errors,
        });
      }
      const token = JWT_TokenGenerator(user);

      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
    async register(
      _,
      { registerInput: { username, email, password, confirmPassword } }
    ) {
      const duplicateUser = await Users.findOne({ username });
      const errors = registerValidation(
        username,
        email,
        password,
        confirmPassword,
        duplicateUser
      );
      console.log("errors", Object.values(errors).length);
      if (!!Object.values(errors).length) {
        throw new UserInputError("Validation Errors", {
          errors,
        });
      }

      password = await bcrypt.hash(password, 12);

      const newUser = new Users({
        email,
        username,
        password,
      });

      const res = await newUser.save();

      const token = JWT_TokenGenerator(res);

      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
  },
};

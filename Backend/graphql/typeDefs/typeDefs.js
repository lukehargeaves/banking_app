const { gql } = require("apollo-server");

module.exports = gql`
  type Users {
    id: String
    username: String
    password: String
    confirmPassword: String
    email: String
    token: String
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Query {
    getUsers: [Users]
  }
  type Mutation {
    register(registerInput: RegisterInput): Users!
    login(username: String!, password: String!): Users!
  }
`;

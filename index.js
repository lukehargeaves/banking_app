const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");
const { MONGODB } = require("./config");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

const connect = async () => {
  try {
    await mongoose.connect(
      MONGODB,
      { useNewUrlParser: true },
      { useUnifiedTopology: true }
    );
    await server.listen({ port: 5000 });
  } catch (e) {
    console.log("error ", e);
  }
};

connect();

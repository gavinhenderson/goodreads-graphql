const { ApolloServer } = require("apollo-server-express");
const { addResolversToSchema } = require("@graphql-tools/schema");
const path = require("path");

const { resolvers, schema } = require("@goodreads-graphql/graphql");

const server = new ApolloServer({
  schema: addResolversToSchema({
    schema,
    resolvers,
  }),
  introspection: true,
});

module.exports = server;

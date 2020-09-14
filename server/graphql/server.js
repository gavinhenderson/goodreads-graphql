const { ApolloServer } = require("apollo-server-express");
const { loadSchemaSync } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
const { addResolversToSchema } = require("@graphql-tools/schema");
const path = require("path");

const resolvers = {
  Query: require("./resolvers/query"),
};

const schema = loadSchemaSync(path.join(__dirname, "schema/**/*.graphql"), {
  loaders: [new GraphQLFileLoader()],
});

const server = new ApolloServer({
  schema: addResolversToSchema({
    schema,
    resolvers,
  }),
  introspection: true,
  playground: true,
});

module.exports = server;

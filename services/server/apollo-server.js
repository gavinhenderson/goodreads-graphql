const { ApolloServer } = require("apollo-server-express");
const { addResolversToSchema } = require("@graphql-tools/schema");

const { resolvers, schema } = require("@goodreads-graphql/graphql");

const createApolloServer = () => {
  const server = new ApolloServer({
    schema: addResolversToSchema({
      schema,
      resolvers,
    }),
    introspection: true,
    playground: {
      settings: {
        "request.credentials": "same-origin",
      },
    },
    context: ({ req }) => {
      return { session: req.session };
    },
  });

  return server;
};

module.exports = createApolloServer;

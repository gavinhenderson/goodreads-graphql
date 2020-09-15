const { loadSchemaSync } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
const path = require("path");

const schema = loadSchemaSync(path.join(__dirname, "schema/**/*.graphql"), {
  loaders: [new GraphQLFileLoader()],
});

module.exports = schema;

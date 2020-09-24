const { currentUser } = require("@goodreads-graphql/goodreads");

module.exports = {
  hello: () => "Hello world!",
  currentUser: async (parent, args, { session }, info) => {
    const user = await currentUser(session);
    return user;
  },
};

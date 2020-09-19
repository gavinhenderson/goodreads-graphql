const { currentUser } = require("@goodreads-graphql/goodreads");

module.exports = {
  hello: () => "Hello world!",
  currentUser: async (parent, args, { authService, session }, info) => {
    const user = await currentUser(authService, session);
    return user;
  },
};

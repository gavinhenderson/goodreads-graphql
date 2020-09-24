const { authenticatedGet } = require("@goodreads-graphql/auth");

const currentUser = async ({ token, secret }) => {
  const result = await authenticatedGet(
    "https://www.goodreads.com/api/auth_user",
    token,
    secret
  );

  console.log({ token, secret });
  console.log({ result });

  return { id: 1, token };
};

module.exports = {
  currentUser,
};

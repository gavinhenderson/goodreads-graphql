const currentUser = async (authService, { token }) => {
  // console.log("RAN");

  // console.log("token", token);

  // const test = await authService.get(
  //   "/https://www.goodreads.com/api/auth_user",
  //   token
  // );

  // console.log({ test });

  return { id: 1, token };
};

module.exports = {
  currentUser,
};

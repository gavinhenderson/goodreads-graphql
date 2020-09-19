const currentUser = (authService, { secret, token }) => {
  console.log("RAN");

  const headers = authService.getAuthHeaders("/test", secret, token);

  console.log({ headers });

  return { id: 1 };
};

module.exports = {
  currentUser,
};

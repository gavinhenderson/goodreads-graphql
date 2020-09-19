const express = require("express");
const AuthService = require("./service");

const setupAuthRouter = (authService) => {
  const authRouter = express.Router();

  authRouter.get("/redirect", async (req, res) => {
    const { url, token, secret } = await authService.getAuthUrl();

    req.session.token = token;
    req.session.secret = secret;

    console.log(req.session);

    res.redirect(url);
  });

  authRouter.get("/callback", (req, res) => {
    const { oauth_token: oauthToken } = req.query;

    req.session.oauthToken = oauthToken;

    console.log(req.session);

    res.redirect("/");
  });

  return authRouter;
};

module.exports = {
  setupAuthRouter,
  AuthService,
};

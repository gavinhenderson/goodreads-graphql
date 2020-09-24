const express = require("express");
const { getAuthUrl, authenticatedGet } = require("./service");

const setupAuthRouter = () => {
  const authRouter = express.Router();

  authRouter.get("/redirect", async (req, res) => {
    const { url, token, secret } = await getAuthUrl();

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
  authenticatedGet,
};

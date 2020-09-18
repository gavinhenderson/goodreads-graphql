const express = require("express");
const AuthService = require("./service");
const authRouter = express.Router();

const authService = new AuthService();

authRouter.get("/redirect", async (req, res) => {
  const url = await authService.getAuthUrl();

  res.redirect(url);
});

authRouter.get("/callback", (req, res) => {
  const { oauth_token } = req.query;

  req.session.oauthToken = oauth_token;

  res.redirect("/");
});

module.exports = {
  authRouter,
};

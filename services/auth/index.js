const express = require("express");
const AuthService = require("./service");
const authRouter = express.Router();

const authService = new AuthService();

authRouter.get("/redirect", async (req, res) => {
  const url = await authService.getAuthUrl();

  res.redirect(url);
});

module.exports = {
  authRouter,
};

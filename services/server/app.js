const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const server = require("./apollo-server");
const OAuth = require("oauth").OAuth;
const { goodreadsKey, goodreadsSecret } = require("../../secrets.json");

const app = express();

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

const URL = "https://goodreads.com";
const requestURL = `${URL}/oauth/request_token`;
const accessURL = `${URL}/oauth/access_token`;
const version = "1.0";
const encryption = "HMAC-SHA1";
const callbackURL = "http://localhost:3000";

const oAuthService = new OAuth(
  requestURL,
  accessURL,
  goodreadsKey,
  goodreadsSecret,
  version,
  callbackURL,
  encryption
);

// TODO - Move this or bin it
app.get("/auth", async (req, res) => {
  const url = await new Promise((resolve, reject) => {
    oAuthService.getOAuthRequestToken(
      (error, oAuthToken, oAuthTokenSecret, results) => {
        if (error)
          reject(new GoodreadsApiError(error.message, "getRequestToken()"));

        const url = `${URL}/oauth/authorize?oauth_token=${oAuthToken}&oauth_callback=${oAuthService._authorize_callback}`;
        console.log({
          OAUTH_TOKEN: oAuthToken,
          OAUTH_TOKEN_SECRET: oAuthTokenSecret,
        });

        resolve(url);
      }
    );
  });

  res.send(url);
});

app.use(express.static(path.join(__dirname, "../app/build")));

server.applyMiddleware({ app });

module.exports = app;

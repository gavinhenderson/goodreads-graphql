const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const server = require("./apollo-server");
const { authRouter } = require("@goodreads-graphql/auth");

const { SESSION_SECRET } = process.env;

const app = express();

const session = require("express-session");

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(function (req, res, next) {
  if (!req.session.oauthToken) {
    req.session.oauthToken = null;
  }

  req.token = req.session.oauthToken;

  next();
});

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use("/auth", authRouter);

app.use(express.static(path.join(__dirname, "../app/build")));

server.applyMiddleware({ app });

module.exports = app;

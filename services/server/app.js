const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const createApolloServer = require("./apollo-server");
const { AuthService, setupAuthRouter } = require("@goodreads-graphql/auth");
const session = require("express-session");

const { SESSION_SECRET } = process.env;

const app = express();

const authService = new AuthService();
const authRouter = setupAuthRouter(authService);

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

  next();
});

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use("/auth", authRouter);

app.use(express.static(path.join(__dirname, "../app/build")));

const server = createApolloServer(authService);
server.applyMiddleware({ app });

module.exports = app;

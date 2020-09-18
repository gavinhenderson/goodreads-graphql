const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const server = require("./apollo-server");
const { authRouter } = require("@goodreads-graphql/auth");

const app = express();

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use("/auth", authRouter);

app.use(express.static(path.join(__dirname, "../app/build")));

server.applyMiddleware({ app });

module.exports = app;

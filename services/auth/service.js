const OAuth = require("@goodreads-graphql/oauth").OAuth;

const { GOODREADS_KEY, GOODREADS_SECRET, AUTH_CALLBACK_URL } = process.env;

const URL = "https://goodreads.com";
const requestURL = `${URL}/oauth/request_token`;
const accessURL = `${URL}/oauth/access_token`;
const version = "1.0";
const encryption = "HMAC-SHA1";

const authenticatedGet = async (url, token, secret) => {
  const authService = new OAuth(
    requestURL,
    accessURL,
    GOODREADS_KEY,
    GOODREADS_SECRET,
    version,
    AUTH_CALLBACK_URL + "/auth/callback",
    encryption
  );

  return new Promise((resolve, reject) => {
    // url, oauth_token, oauth_token_secret, callback
    console.log({ url, token, secret });
    authService.get(url, token, secret, (err, data, response) => {
      resolve({ err, data, response });
    });
  });
};

const getOAuthRequestToken = async () => {
  const authService = new OAuth(
    requestURL,
    accessURL,
    GOODREADS_KEY,
    GOODREADS_SECRET,
    version,
    AUTH_CALLBACK_URL + "/auth/callback",
    encryption
  );

  return new Promise((resolve) => {
    authService.getOAuthRequestToken((error, token, secret, results) => {
      resolve({ error, token, secret, results });
    });
  });
};

const getAuthUrl = async () => {
  const { error, token, secret } = await getOAuthRequestToken();

  if (error) {
    throw new Error(error);
  }

  const callback = authService._authorize_callback;

  return {
    token,
    secret,
    url: `${URL}/oauth/authorize?oauth_token=${token}&oauth_callback=${callback}`,
  };
};

module.exports = { authenticatedGet, getAuthUrl };

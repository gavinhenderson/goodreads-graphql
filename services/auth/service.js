const OAuth = require("oauth").OAuth;

const { GOODREADS_KEY, GOODREADS_SECRET, AUTH_CALLBACK_URL } = process.env;

const URL = "https://goodreads.com";
const requestURL = `${URL}/oauth/request_token`;
const accessURL = `${URL}/oauth/access_token`;
const version = "1.0";
const encryption = "HMAC-SHA1";

class AuthService {
  constructor() {
    this.service = new OAuth(
      requestURL,
      accessURL,
      GOODREADS_KEY,
      GOODREADS_SECRET,
      version,
      AUTH_CALLBACK_URL,
      encryption
    );
  }

  getOAuthRequestToken() {
    return new Promise((resolve) => {
      this.service.getOAuthRequestToken((error, token, secret, results) => {
        resolve({ error, token, secret, results });
      });
    });
  }

  async getAuthUrl() {
    const { error, token } = await this.getOAuthRequestToken();

    if (error) {
      throw new Error(error);
    }

    const callback = this.service._authorize_callback;

    return `${URL}/oauth/authorize?oauth_token=${token}&oauth_callback=${callback}`;
  }
}

module.exports = AuthService;

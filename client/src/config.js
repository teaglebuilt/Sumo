// eslint-disable-next-line
const development = {
  serverUrl: "http://localhost",
  port: "8000"
};

// eslint-disable-next-line
const production = {};

const env = process.env.NODE_ENV;

// eslint-disable-next-line
const envConfig = eval(`${env}`);

module.exports = Object.assign({}, envConfig);

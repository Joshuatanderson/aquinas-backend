const dotenv = require('dotenv');

const result = dotenv.config();

let envs;

if (!('error' in result)) {
  envs = result.parsed; // is in local
} else {
  envs = {};
  for (const [key, val] of Object.entries(process.env)){
	envs[key] = val;
  }
}

module.exports = envs;
'use strict';

const DEFAULT_CONFIG_PATH = './config.default.json';

let configPath = DEFAULT_CONFIG_PATH;
const customPath = process.env.ENV_CONFIG_PATH;

if (customPath) {
    configPath = customPath;
}

module.exports = require(configPath);

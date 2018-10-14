'use strict';

const chaosDriver = require('../lib/chaosDriver');

module.exports = {
  devices: [
    ...chaosDriver.devices,
  ],
};
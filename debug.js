"use strict";

const neeoapi = require('neeo-sdk');
const devices = require('./devices');

const BRAIN_IP = process.env.NEEO_HOST_IP;

if (!BRAIN_IP) {
  console.error('NO_BRAIN_IP: please set a NEEO Brain IP in the NEEO_HOST_IP env variable!');
  process.exit(1);
}

neeoapi
  .startServer({
    brain: BRAIN_IP,
    port: 3299,
    name: 'debug-server',
    devices: [...devices.devices],
  }, {})
  .catch((error) => {
    console.error('ERROR:', error);
    process.exit(1);
});

'use strict';

const neeo = require('neeo-sdk');

const controller = require('./controller');

const TEST_SENSOR = {
  name: 'TEST_SENSOR',
  label: 'TEST SENSOR',
  type: 'range',
  unit: '%',
  range: [0, 100],
};

const chaosMonkey = neeo.buildDevice('Chaos Monkey')
  .setManufacturer('NEEO')
  .setType('ACCESSORY')
  .addAdditionalSearchToken('Test')
  .registerDeviceSubscriptionHandler(controller.getRegisterSubscriptionHandlerFunctions())
  .addSensor(TEST_SENSOR, {
    getter: () => 0,
  });

module.exports = {
  devices: [
    chaosMonkey,
  ],
};
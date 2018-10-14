'use strict';

const debug = require('debug')('neeo:chaos-monkey:controller');

const monkey = require('./monkey');

module.exports = {
  getRegisterSubscriptionHandlerFunctions,
};

function getRegisterSubscriptionHandlerFunctions() {
  return {
    deviceAdded: () => {
      startChaosMonkey();
    },
    deviceRemoved: () => {
      stopChaosMonkey();
    },
    initializeDeviceList: (deviceIds) => {
      if (deviceIds && deviceIds.length > 0) {
        startChaosMonkey();
      }
    },
  };
}

function startChaosMonkey() {
  debug('START_CHAOS_MONKEY');
  monkey.start();
}

function stopChaosMonkey() {
  debug('STOP_CHAOS_MONKEY');
  monkey.stop();
}
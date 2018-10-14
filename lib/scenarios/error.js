'use strict';

const debug = require('debug')('neeo:chaos-monkey:error');

module.exports = {
  run,
};

function run() {
  debug('RUNNING_ERROR');
  throw new Error('OH_NO_ERROR_SCENARIO_ERROR!');
}
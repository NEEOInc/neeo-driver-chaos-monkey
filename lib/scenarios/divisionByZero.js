'use strict';

const debug = require('debug')('neeo:chaos-monkey:divisionByZero');

module.exports = {
  run,
};

function run() {
  debug('RUNNING_DIVISION_BY_ZERO');
  const shouldBeUnfined = 10 / 0;
  if (shouldBeUnfined !== Infinity) {
    throw new Error('MONKEY_FAILED_DIVISON_BY_ZERO_NOT_INFINITY');
  }
}
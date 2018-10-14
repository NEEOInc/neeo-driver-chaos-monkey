'use strict';

const debug = require('debug')('neeo:chaos-monkey:scenarios');

const divisonByZero = require('./scenarios/divisionByZero');
const error = require('./scenarios/error');

const SCENARIOS = [
  divisonByZero,
  error,
];

module.exports = {
  getNumberOfScenarios,
  runScenarioWithIndex,
};

function getNumberOfScenarios() {
  return SCENARIOS.length;
}

function runScenarioWithIndex(scenarioIndex) {
  if (typeof scenarioIndex === undefined ||
      scenarioIndex < 0 ||
      scenarioIndex >= SCENARIOS.length) {
    debug('INVALID_SCENARIO_INDEX', scenarioIndex);
    return;
  }

  SCENARIOS[scenarioIndex].run();
}
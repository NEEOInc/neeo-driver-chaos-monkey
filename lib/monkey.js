'use strict';

const debug = require('debug')('neeo:chaos-monkey:monkey');
const scenarios = require('./scenariosHandler');

const MONKEY_RUN_INTERVAL_MS = 60 * 1000;
let alreadyRunning = false;
let interval;

module.exports = {
  start,
  stop,
};

function start() {
  if (alreadyRunning) {
    debug('MONKEY_ALREADY_RUNNING');
    return;
  }

  debug('STARTING_MONKEY');
  interval = setInterval(() => {
    runRandomScenario();
  }, MONKEY_RUN_INTERVAL_MS);
}

function stop() {
  if (!alreadyRunning) {
    debug('NO_MONKEY_RUNNING');
    return;
  }

  debug('STOPPING_MONKEY');
  clearInterval(interval);
  interval = null;
}

function runRandomScenario() {
  const numberOfSenarios = scenarios.getNumberOfScenarios();
  const scenarioIndexToRun = Math.floor(Math.random() * numberOfSenarios);
  scenarios.runScenarioWithIndex(scenarioIndexToRun);
}
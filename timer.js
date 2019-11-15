const BasePlugin = require('./node_modules/@cloudant/cloudant/plugins/base.js');
const prometheus = require('prom-client');


/**
 * Timer plugin.
 */
class TimerPlugin extends BasePlugin {
  // Instantiate Prometheus
  // Instantiate Histogram
  responseHistogram = new prometheus.Histogram({
    name: 'response',
    help: 'Cloudant response time',
    buckets: [0.1, 5, 15, 50, 100, 500]
  });

  constructor(client, cfg) {
    super(client, cfg);
  }

  onResponse(state, response, callback) {
    let timings = response.request.timings;
    console.log(JSON.stringify(timings));
    this.responseHistogram.observe(timings.response);
    callback(state);
  }

  onError(state, error, callback) {
    callback(state);
  }
}

TimerPlugin.id = 'timer';

module.exports = TimerPlugin;

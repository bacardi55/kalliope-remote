import DS from 'ember-data';
import ENV from 'kalliope-ember/config/environment';

export default DS.RESTAdapter.extend({
  host: ENV.APP.KALLIOPE.HOST + ':' + ENV.APP.KALLIOPE.PORT,
  headers: {
    withCredentials: true,
    Authorization: 'Basic ' + btoa(ENV.APP.KALLIOPE.LOGIN + ':' + ENV.APP.KALLIOPE.PASS),
  },
  // This is a hack as kalliope doesn't answer to /synapses but only to /synapses/.
  buildURL: function(modelName, id, snapshot, requestType, query) {
    var url = this._buildURL(modelName, id);
    if (modelName == 'synapse' && !id) {
      //url = url + '/';
    }

    return url;
  }
});


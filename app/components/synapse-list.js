import Ember from 'ember';
import ENV from 'kalliope-ember/config/environment';

export default Ember.Component.extend({
  actions: {
    launch_synapse: function(synapse) {
      Ember.$.ajax({
        headers: {
          withCredentials: true,
          Authorization: 'Basic ' + btoa(ENV.APP.KALLIOPE.LOGIN + ':' + ENV.APP.KALLIOPE.PASS),
        },
        url: ENV.APP.KALLIOPE.HOST + ':' + ENV.APP.KALLIOPE.PORT + '/synapses/' + synapse.get('name'),
        type: 'POST'
      }).then(function(response) {
        //TODO.
        console.log('response!');
        console.log(response);
      });
    }
  }
});

import Ember from 'ember';
import ENV from 'kalliope-ember/config/environment';

export default Ember.Component.extend({
    actions: {
        send_order: function() {
            console.log('in send order: ')
            var order = this.get('text_order');
            console.log(order);
            if (order) {
                Ember.$.ajax({
                  headers: {
                    withCredentials: true,
                    Authorization: 'Basic ' + btoa(ENV.APP.KALLIOPE.LOGIN + ':' + ENV.APP.KALLIOPE.PASS),
                  },
                  contentType: 'application/json',
                  url: ENV.APP.KALLIOPE.HOST + ':' + ENV.APP.KALLIOPE.PORT + '/synapses/start/order',
                  data: '{"order": "'+order+'"}',
                  type: 'POST'
                }).then(function(response) {
                  //TODO: When kalliopé will return the response of the neuron instead of the brain used.
                  console.log('response!');
                  console.log(response);
                });
            }
        }
    }
});

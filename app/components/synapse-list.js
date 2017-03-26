import Ember from 'ember';
import ENV from 'kalliope-ember/config/environment';

export default Ember.Component.extend({
  load_ignored_synapses: function() {
    if (typeof(Storage) !== "undefined") {
      var tmp = localStorage.getItem('kr:ignored-synapses');
      if (tmp == null) {
        tmp = [];
      }
      else {
        tmp = JSON.parse(tmp);
      }
      return tmp;
    } else {
      console.log('no local cache found');
    }
  },

  saved_ignored_synapses: function(synapse, remove) {
    var tmp = this.load_ignored_synapses();
    if (tmp == null) {
      tmp = [];
    }
    var position = tmp.indexOf(synapse.get('name'));
    if (position === -1 && remove !== false) {
      tmp.push(synapse.get('name'));
    }
    else if (position !== -1 && remove === true) {
      tmp.splice(position, 1);
    }
    localStorage.setItem('kr:ignored-synapses', JSON.stringify(tmp));
  },

  actions: {
    launch_synapse: function(synapse) {
      Ember.$.ajax({
        headers: {
          withCredentials: true,
          Authorization: 'Basic ' + btoa(ENV.APP.KALLIOPE.LOGIN + ':' + ENV.APP.KALLIOPE.PASS),
        },
        url: ENV.APP.KALLIOPE.HOST + ':' + ENV.APP.KALLIOPE.PORT + '/synapses/start/id/' + synapse.get('name'),
        type: 'POST'
      }).then(function(response) {
        //TODO: When kalliopé will return the response of the neuron instead of the brain used.
        console.log('response!');
        console.log(response);
      });
    },

    ignore_synapse: function(synapse) {
      if (typeof(Storage) !== "undefined") {
        // Save in local store.
        this.saved_ignored_synapses(synapse);
        // Change synapse object value.
        synapse.set('hidden', true);
      } else {
        console.log('no local cache found');
      }
    },

    unignore_synapse: function(synapse) {
      if (typeof(Storage) !== "undefined") {
        // Save in local store.
        this.saved_ignored_synapses(synapse, true);
        // Change synapse object value.
        synapse.set('hidden', false);
      } else {
        console.log('no local cache found');
      }
    }
  }
});

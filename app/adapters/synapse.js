import DS from 'ember-data';
import ENV from 'kalliope-ember/config/environment';

export default DS.RESTAdapter.extend({
  host: ENV.APP.KALLIOPE.HOST + ':' + ENV.APP.KALLIOPE.PORT,
  headers: {
    withCredentials: true,
    Authorization: 'Basic ' + btoa(ENV.APP.KALLIOPE.LOGIN + ':' + ENV.APP.KALLIOPE.PASS),
  }
});


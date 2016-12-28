import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  signals: DS.attr(),
  neurons: DS.attr(),

  launchable: Ember.computed('signals', function() {
    // For now, we disable signals that have parameter in their order.
    var valid = true;
    this.get('signals').forEach(function(item, index, enumerable) {
      if (item.order.match(/{{[^}]*}}/)){
        valid = false;
      }
    });
    return valid;
  })
});

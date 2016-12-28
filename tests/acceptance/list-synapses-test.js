import { test } from 'qunit';
import moduleForAcceptance from 'kalliope-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list synapses');

test('should redirect to synapses route', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/synapses', 'sould redirect automatically');
  });
});

test('should list available synapses', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.listing').length, 2, 'should see 2 synapses');
  });
});

test('should link to information about this web app.', function (assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function () {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});


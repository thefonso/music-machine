import { moduleFor, test } from 'ember-qunit';

moduleFor('service:playback-service', 'Unit | Service | playback service', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it calculates the bars, beats and sixteenths', function(assert) {
  let service = this.subject();

  assert.equal(service.get('display'), '1:1:1');

  service.set('tickCount', 1);
  assert.equal(service.get('display'), '1:1:2');

  service.set('tickCount', 4);
  assert.equal(service.get('display'), '1:2:1');


  service.set('tickCount', 15);
  assert.equal(service.get('display'), '1:4:4');


  service.set('tickCount', 16);
  assert.equal(service.get('display'), '2:1:1');

});

import { moduleFor } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';
import Song from 'music-machine/models/song';


moduleFor('service:playback-service', 'Unit | Service | playback service', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

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

//Heartbeat
test('tickInterval', function(assert){
  let service = this.subject();

  service.set('song', Song.create({tempo: 60}));

  assert.equal(service.get('tickInterval'), 250);

  service.set('song', Song.create({tempo: 120}));

  assert.equal(service.get('tickInterval'), 125);
});

test('play', function(assert){
  let service = this.subject();
  let tickStub = this.stub(service, 'tick');

  service.set('isPlaying', false);
  service.set('tickCount', 10);

  service.play();

  assert.equal(service.get('isPlaying'), true);
  assert.equal(service.get('tickCount'), 0);
  assert.ok(tickStub.calledOnce, 'tick was called once');
});



import Ember from 'ember';
import { moduleFor } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';
import Song from 'music-machine/models/song';
import { mockRunLater, restoreRunLater } from 'music-machine/tests/helpers/mock-run-later';

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

test('stop and play', function(assert){
  let service = this.subject();

  service.setProperties({
    isPlaying: false,
    tickCount: 8,
    song: Song.create({tempo: 60})
  });

  mockRunLater(this);

  assert.equal(service.get('isPlaying'), false);
  assert.equal(service.get('tickInterval'), 250);
  assert.equal(service.get('tickCount'), 8);

  service.play();

  assert.equal(service.get('isPlaying'), true);
  assert.equal(service.get('tickCount'), 1);

  this.mockedRunLater.advanceMilliseconds(100);
  assert.equal(service.get('tickCount'), 1);

  this.mockedRunLater.advanceMilliseconds(150);
  assert.equal(service.get('tickCount'), 2);

  this.mockedRunLater.advanceMilliseconds(250);
  assert.equal(service.get('tickCount'), 3);

  service.stop();

  assert.equal(service.get('isPlaying'), false);
  assert.equal(service.get('tickCount'), 3);

  this.mockedRunLater.advanceMilliseconds(250);
  assert.equal(service.get('tickCount'), 3);

  restoreRunLater(this);
});













import Ember from 'ember';
import Song from 'music-machine/models/song';

export default Ember.Route.extend({
  playbackService: Ember.inject.service(),

  queryParams: {
    data: {
      refreshModel: true
    }
  },
  model(params) {
    return Song.fromEncodedBase64(params.data);
  },
  afterModel(song) {
    this.set('playbackService.song', song);
  }
});

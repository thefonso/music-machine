import Em from 'ember';
import { Serializer, Deserializer } from './mixins/song-serialization'
import Channel from './channel';
import presets from './data/presets';

let Song = Em.Object.extend(Serializer, {
  name: 'Untitled',
  tempo: 100,
  channels: null,

  init() {
    this._super(...arguments);
    this.set('channels', Em.A());
  },

  setTick(tickCount) {
    this.get('channels').invoke('setTick', tickCount);
  },

  getCurrentNotes(){
    let notes = [];

    this.get('channels').forEach(channel => {
      let playingStep = channel.get('steps').find(step => step.get('isPlaying'));

      let volume = channel.get('volume') * playingStep.get('velocity');

      if(volume > 0){
        notes.push({
          sound: channel.get('sound'),
          volume
        });
      }
    });

    return notes;
  },

  addChannel: function(sound) {
    this.get('channels').pushObject(
      Channel.create({ sound: sound })
    );
  }

}).reopenClass(Deserializer, {
  fromPreset: function(preset) {
    return this.fromBase64Compressed(presets[preset]);
  }
});

export default Song;

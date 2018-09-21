import Ember from 'ember';

let Controls = Ember.Component.extend({
  tickCount: null,
  isActive: false,
  playbackService: Ember.inject.service(),
  actions: {
    next(){
      this.get('playbackService').next();
    },
    play(){
      this.get('playbackService').play();
    },
    stop(){
      this.get('playbackService').stop();
    },
    mute(){
      this.set('channel.volume', 0);
    },
    unmute(){
      this.set('channel.volume', 1);
    },
    delete(){
      this.sendAction('deleteChannel', this.get('channel'));
    },
    increaseTempo(){
      this.incrementProperty('song.tempo', 5);
    },
    decreaseTempo(){
      if(this.get('song.tempo') > 5) {
        this.decrementProperty('song.tempo', 5);
      }
    },
    switchToPreset(preset){
      this.sendAction('switchToPreset', preset);
    }
  }
});

export default Controls;

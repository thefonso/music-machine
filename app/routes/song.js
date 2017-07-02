import Ember from 'ember';
import Song from 'music-machine/models/songs';

export default Ember.Controller.extend({
 model(params){
   return Song.fromeEncodedBase64(params.data);
 }
});

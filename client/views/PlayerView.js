// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {//create event listener to listen for when a song ends
//     mediaElement.seekable.end();    // Returns the ending time (in seconds)
// mediaElement.currentTime = 122;
// if current === ended, trigger('ended')
  // console.log(this.el)
    
  },

  events: {
    'ended': function() {
      this.model.ended();
    }
  },
  
  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});

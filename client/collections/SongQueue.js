// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(song){
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.dequeue, this);
    this.on('add', this.enqueue, this);
    this.on('removeSong', this.removeSong, this);

  },

  enqueue: function(song) {
    this.add(song);
    if (this.at(0) === song) {
      this.playFirst();
    }
  },

  playFirst: function() {
    if (this.at(0)) {
      this.at(0).play();     
    }
  },

  dequeue: function(song) {
    // song = (song || this)
    this.remove(this.at(0))
    if (this.at(0)) {
      this.playFirst()
    }
  },

  removeSong: function(song){
    if (this.at(0) === song) {
      this.trigger('stop');
      this.remove(song)
      this.playFirst()
    } else {
      this.remove(song); 
    }

  }

  // stop: function(){
  //   this.set('currentSong', null);
  // }

});
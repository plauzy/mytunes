// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

  },

  enqueue: function(song) {
    //why not use push? advantages/disadv?
    this.add(song);
    console.log("Adding to collection")
  }
  // render: function(){
    // get the context songQueueView => call that render
  // }

});
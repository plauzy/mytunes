// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    // add an instance of a song to the SongQueue collection
    params.library.on('enqueue', function(song){
      this.get('songQueue').enqueue(song) // call some function to let sonqueue know you are enquing song
      // this.get('songQueue').playFirst(song)
      // this.get('songQueue').enqueue(song)
      console.log('enqueue');

      // this.get('songQueue').add(song)
    }, this);

    this.get('songQueue').on('stop', function(){
      this.set('currentSong', null);
    }, this);

    params.library.on('play', function(song){
      console.log('app model play');
      this.set('currentSong', song);
    }, this);
  }

});

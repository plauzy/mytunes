// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td class="remove">[Remove]</td><td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click .remove': function() {
      console.log(this.model.collection);

      this.model.removeSong(this.model);
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});

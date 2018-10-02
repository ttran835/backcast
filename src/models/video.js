var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select: function() {
    // this.trigger('select', this.function, this)
    this.trigger('click', this.sayHello(), this);
  },

  sayHello: function(){
    console.log('say hello')
  }

});

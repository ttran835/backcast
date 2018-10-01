var VideoPlayerView = Backbone.View.extend({
  init: function () {
    $('.player').on('click', function () {
      console.log('hello');
    });

  },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});

var test = new VideoPlayerView(); 
test.init();
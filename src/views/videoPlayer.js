var VideoPlayerView = Backbone.View.extend({
  init: function () {
    this.render()
  },

  render: function() {
    this.$el.html(this.template(this.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});

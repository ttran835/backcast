var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    var videoPlayer = new VideoPlayerView();
    var videoList = new VideoListView();
    $('.player').html(videoPlayer.render().$el);
    $('.list').html(videoList.render().$el);
    return this;
  },

  template: templateURL('src/templates/app.html')

});

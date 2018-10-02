var AppView = Backbone.View.extend({
 
  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.videoList = new VideoListView({collection: this.videos})
    this.videoPlayer = new VideoPlayerView(this.videos.models[0]);
    console.log(this.videos.models[0]);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    $('.col-md-5').html(this.videoList.render().el)
    $('.player').html(this.videoPlayer.render().el);
  },
  template: templateURL('src/templates/app.html')

});

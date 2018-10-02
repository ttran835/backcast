var AppView = Backbone.View.extend({
 
  el: '#app',

  initialize: function() {
    this.videoList = new Videos(window.exampleVideoData);
    console.log(this.videoList);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    this.videoPlayer = new VideoPlayerView();
    this.videoListView = new VideoListView({colllection: this.video});
    console.log(this.videoListView)
    this.videoList.each(function(video){
      
    })
    $('.player').html(this.videoPlayer.render().$el);
    $('.list').html(this.videoListView.render().$el);
    return this;
  },
  template: templateURL('src/templates/app.html')

});

/*
we are able to access the Id array 
  line 6; 
  You want to access the id of each element in collection;  
    How to access it 

*/
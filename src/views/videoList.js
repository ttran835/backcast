var VideoListView = Backbone.View.extend({

  init: function(){
    this.render()
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.find('.video-list').html(this.collection.map(function(video){
      console.log(video);
      return new VideoListEntryView({model:video}).render().el;
    }))
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});


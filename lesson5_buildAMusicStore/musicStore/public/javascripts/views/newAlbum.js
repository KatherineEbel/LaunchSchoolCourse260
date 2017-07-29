const NewAlbumView = Backbone.View.extend({
  id: 'albumNew',
  template: App.templates.newAlbum,
  render() {
    this.$el.html(this.template());
    App.$el.html(this.$el);
  },
  initialize() {
    this.render();
  }
});

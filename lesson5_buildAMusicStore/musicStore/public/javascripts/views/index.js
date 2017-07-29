const IndexView = Backbone.View.extend({
  id: 'index',
  template: App.templates.index,
  events: {
    'click footer a': 'addAlbum'
  },
  addAlbum(e) {
    e.preventDefault();
    this.trigger('addAlbum');
  },
  render() {
    this.$el.html(this.template());
    App.$el.html(this.$el);
  },
  initialize() {
    this.render();
  }
});

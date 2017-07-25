let AlbumsView = Backbone.View.extend({
  el: '#albums',
  template: Handlebars.compile($("[data-name=albums]").html()),
  render() {
    this.$el.html(this.template({albums: this.collection.toJSON()}));
  },
  initialize() {
    this.listenTo(this.collection, 'sync change', this.render);
  }
});

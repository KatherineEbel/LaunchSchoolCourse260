let AlbumView = Backbone.View.extend({
  tagName: 'li',
  template: App.templates.album,
  render() {
    const id = this.model.get('id');
    this.$el.attr('id', `album${id}`);
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.$el.find('ul'));
  },
  initialize() {
    this.render();
    this.model.view = this;
  }
});

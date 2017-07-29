const NewAlbumView = Backbone.View.extend({
  id: 'albumNew',
  template: App.templates.newAlbum,
  events: {
    submit: 'create'
  },
  render() {
    this.$el.html(this.template());
    App.$el.html(this.$el);
  },
  initialize() {
    this.render();
  },
  create(e) {
    e.preventDefault();
    let $f = this.$('form');
    $.ajax({
      url: $f.attr('action'),
      type: $f.attr('method'),
      data: $f.serialize(),
      success: function(json) {
        App.albums.add(json);
        App.indexView();
      }
    });
  }
});

let App = {
  templates: JST,
  $el: $('main'),
  renderAlbums() {
    this.albums.each(this.renderAlbumView);
  },
  renderAlbumView(album) {
    new AlbumView({
      model: album
    });
  },
  init() {
    this.renderAlbums();
  }
};

Handlebars.registerHelper('formatPrice', function(model) {
  return (+this.price).toFixed(2);
});

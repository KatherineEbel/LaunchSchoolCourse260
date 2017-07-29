let App = {
  templates: JST,
  $el: $('main'),
  indexView() {
    this.index = new IndexView();
    this.renderAlbums();
    this.bindEvents();
  },
  newAlbum() {
    new NewAlbumView();
  },
  renderAlbums() {
    this.albums.each(this.renderAlbumView);
  },
  renderAlbumView(album) {
    new AlbumView({
      model: album
    });
  },
  bindEvents() {
    _.extend(this, Backbone.Events);
    this.listenTo(this.index, 'addAlbum', this.newAlbum);
  }
};

Handlebars.registerHelper('formatPrice', (price) => (+price).toFixed(2));

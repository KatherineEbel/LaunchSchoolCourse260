let App = {
  templates: JST,
  $el: $('main'),
  indexView() {
    this.indexView = new IndexView();
    this.renderAlbums();
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
    this.listenTo(this.indexView, 'addAlbum', this.newAlbum);
  },
  init() {
    this.indexView();
    this.bindEvents();
  }
};

Handlebars.registerHelper('formatPrice', (price) => (+price).toFixed(2));

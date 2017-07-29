let App = {
  templates: JST,
  $el: $('main'),
  indexView() {
    this.index = new IndexView();
    this.renderAlbums();
    this.createCart();
    this.bindEvents();
  },
  newAlbum() {
    new NewAlbumView();
  },
  renderAlbums() {
    this.albums.each(this.renderAlbumView);
  },
  createCart() {
    this.cart = new CartItems();
    this.cart.view = new CartView({
      collection: this.cart
    });
  },
  renderAlbumView(album) {
    new AlbumView({
      model: album
    });
  },
  bindEvents() {
    _.extend(this, Backbone.Events);
    this.listenTo(this.index, 'addAlbum', this.newAlbum);
    this.on('addToCart', this.cart.addItem.bind(this.cart));
  }
};

Handlebars.registerHelper('formatPrice', (price) => (+price).toFixed(2));

let App = {
  albumsLoaded() {
  },
  fetchAlbums() {
    this.albums = new Albums();
    this.view = new AlbumsView({collection: this.albums});
    this.albums.fetch({
      success: this.albumsLoaded.bind(this)
    });
  },
  tracksLoaded(tracks) {
    let tracksModal = new TracksView({
      collection: tracks,
      album: this.selectedAlbum.toJSON()
    });
    tracksModal.render();
    this.tracksView = tracksModal;
  },
  fetchTracks(name) {
    let tracks = new (Tracks.extend({
      url: `/albums/${name}.json`
    }));
    this.selectedAlbum = this.albums.findWhere({ title: name });
    tracks.fetch({
      success: this.tracksLoaded.bind(this)
    });
  },
  init() {
    this.fetchAlbums();
  }
};


let Router = Backbone.Router.extend({
  routes: {
    'albums/:name': 'getAlbum'
  },
  getAlbum(name) {
    App.fetchTracks(name);
  },
  index() {
    if(!App.tracksView.$el.is(':animated')) {
      App.tracksView.fadeOut();
    } 
  },
  initialize() {
    this.route(/^\/?$/, 'index', this.index); 
  }
});

let router = new Router();

Backbone.history.start({
  pushState: true,
  silent: true
});

$(document).on('click', 'a[href^="/"]', function(e) {
  e.preventDefault();
  router.navigate($(e.currentTarget).attr('href').replace(/^\//, ''), { trigger: true });
});

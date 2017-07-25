let $overlay = $('#overlay');

let TracksView = Backbone.View.extend({
  duration: 300,
  template: Handlebars.compile($("[data-name=tracks]").remove().html()),
  open() {
    this.$el.add($overlay).fadeIn(this.duration);
  },
  close(e) {
    e.preventDefault();
    this.fadeOut();
    history.back();
  },
  fadeOut() {
    $overlay.fadeOut(this.duration);
    this.$el.fadeOut(this.duration, function() {
      this.remove();
    }.bind(this));
  },
  render() {
    this.$el.html(this.template({
      tracks: this.collection.toJSON(),
      album: this.album
    }));
    this.open();
  },
  initialize(options) {
    this.album = options.album;
    this.$el.appendTo(document.body);
  }
});

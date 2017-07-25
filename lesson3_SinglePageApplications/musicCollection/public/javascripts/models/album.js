let Album = Backbone.Model.extend({
  parse(attrs) {
    attrs.tracks_url = `/albums/${attrs.title}`;
    return attrs;
  }
});

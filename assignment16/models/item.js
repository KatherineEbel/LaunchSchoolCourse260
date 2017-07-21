let Item = Backbone.Model.extend({
  idAttribute: 'id',
  initialize() {
    this.collection.incrementID();
    this.set('id', this.collection.lastID);
    this.on('remove', this.destroy);
  }
});

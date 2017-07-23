let Items = Backbone.Collection.extend({
  model: Item,
  lastID: 0,
  comparator: 'name',
  incrementID() {
    this.lastID++;
  },
  updateComparator(prop) {
    this.comparator = prop;
    this.sort();
  },
});

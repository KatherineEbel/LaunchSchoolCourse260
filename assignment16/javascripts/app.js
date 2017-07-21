let App = {
  init() {
    this.collection = new Items();
    this.appView = new AppView({collection: this.collection});
    this.collection.reset(items_json);
    this.bind();
  },
  createItem(data) {
    let attribs = propsArray.reduce((result, attr) => {
                    result[attr.name] = attr.value;
                    return result;
                  }, {}).value();
    e.currentTarget.reset();
    this.collection.add(attribs);
  },
  sort(prop) {
    this.collection.updateComparator(prop);
  },
  bind() {
    _.extend(this, Backbone.Events);
    this.listenTo(this.appView, 'sort', this.sort);
  }
}

let ItemsView = Backbone.View.extend({
  el: '#favorites',
  initialize() {
    this.listenTo(this.collection, 'add', this.renderOne);
  },
  render() {
    this.collection.each(this.renderOne.bind(this));
  },
  renderOne(model) {
    model = model || this.collection.last();
    let itemView = new ItemView({model: model});
    this.$el.append(itemView.render());
  }
});

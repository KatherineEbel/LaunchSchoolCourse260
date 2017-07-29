const CartView = Backbone.View.extend({
  el: $('#cart'),
  template: App.templates.cart,
  events: {
    'click a': 'destroy'
  },
  destroy(e) {
    e.preventDefault();
    let $e = $(e.target);
    this.collection.trigger('destroy', $e.attr('data-id'));
    this.render();
  },
  render() {
    this.$el.html(this.template({
      quantity: this.collection.getQuantity(),
      items: this.collection.toJSON(),
      total: this.collection.getTotal()
    }));
  },
  initialize() {
    this.render();
    this.listenTo(this.collection, 'cartUpdated', this.render);
  }
});

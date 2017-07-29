const CartItems = Backbone.Collection.extend({
  setTotal() {
    this.total = this.toJSON().reduce((total, nextVal) => {
      return total + nextVal.price * nextVal.quantity
    }, 0);
    return this;
  },
  getTotal() {
    return this.total;
  },
  getQuantity() {
    return this.quantity;
  },
  setQuantity() {
    this.quantity = this.toJSON().reduce((count, nextVal) => {
      return count + nextVal.quantity
    }, 0);
    return this;
  },
  addItem(item) {
    let existing = this.get(item.get('id'));
    if (existing) {
      existing.set('quantity', existing.get('quantity') + 1);
    } else {
      existing = item.clone();
      existing.set('quantity', 1);
      this.add(existing);
    }
  this.setTotal();
    this.setTotal().setQuantity();
    this.trigger('cartUpdated');
  },
  destroy(id) {
    this.remove(id);
    this.setTotal().setQuantity();
  },
  initialize() {
    this.on('destroy', this.destroy);
  }
});

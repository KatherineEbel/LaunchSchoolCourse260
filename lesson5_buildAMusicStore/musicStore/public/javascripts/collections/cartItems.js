const CartItems = Backbone.Collection.extend({
  setTotal() {
    this.total = this.toJSON().reduce((total, nextVal) => {
      return total + nextVal.price * nextVal.quantity
    }, 0);
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
  },
  addItem(item) {
    item = item.clone();
    item.set('quantity', 1);
    this.add(item);
    this.setTotal();
    this.setQuantity();
    this.trigger('cartUpdated');
  }
});

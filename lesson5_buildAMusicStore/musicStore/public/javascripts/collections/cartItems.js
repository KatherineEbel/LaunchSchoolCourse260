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
  readStorage() {
    let storedCart = JSON.parse(localStorage.getItem('cart'));
    this.reset(storedCart);
    this.setTotal().setQuantity();
  },
  updateStorage() {
    localStorage.setItem('cart', JSON.stringify(this.toJSON()));
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
    this.update()
    this.trigger('cartUpdated');
  },
  destroy(id) {
    this.remove(id);
    this.update();
  },
  update() {
    this.setTotal().setQuantity().updateStorage();
  },
  initialize() {
    this.readStorage();
    this.on('destroy', this.destroy);
  }
});

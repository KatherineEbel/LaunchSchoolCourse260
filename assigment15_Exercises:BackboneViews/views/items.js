let ItemsView = Backbone.View.extend({
  el: '#favorites',
  render() {
    this.collection.each((model) => {
      let itemView = new ItemView({model: model});
      this.$el.append(itemView.render());
    });
  }
});

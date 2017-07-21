let ItemsView = Backbone.View.extend({
  el: 'tbody',
  template: Handlebars.templates.items,

  render(collection) {
    this.$el.html(this.template({items: collection.models}));
  },
  renderOne(model) {
    let itemView = new ItemsView({model: model});
    this.$el.append(itemView.render())
  }
});

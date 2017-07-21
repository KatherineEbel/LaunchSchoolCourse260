let ItemView = Backbone.View.extend({
  el: 'tbody',
  template: Handlebars.templates.item,
  events: {
    'click a': 'delete'
  },
  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this.el;
  },
  delete(e) {
    e.preventDefault();
    debugger
  }
});

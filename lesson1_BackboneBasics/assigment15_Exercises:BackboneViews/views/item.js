let ItemView = Backbone.View.extend({
  tagName: 'li',
  template: Handlebars.templates.listItem,
  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this.el;
  }
});

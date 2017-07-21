let AppView = Backbone.View.extend({
  el: 'body',
  template: Handlebars.templates.app,
  render() {
    this.$el.html(this.template());
  }
});

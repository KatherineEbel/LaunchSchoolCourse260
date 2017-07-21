let AppView = Backbone.View.extend({
  el: 'body',
  events: {
    'click #add-person': 'renderModal',
    'submit': 'add',
    'click .cancel': 'removeModal'
  },
  template: Handlebars.templates.app,
  newTemplate: Handlebars.templates.new,
  render() {
    this.$el.html(this.template());
  },
  renderModal() {
    this.$el.append(this.newTemplate()).fadeIn();
  },
  add(e) {
    e.preventDefault;
    this.trigger('create', this.$('form').serializeArray());
    this.removeModal();
  },
  removeModal() {
    this.$('#modal').remove();
  }
});

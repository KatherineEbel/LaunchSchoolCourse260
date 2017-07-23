let AppView = Backbone.View.extend({
  tagName: 'main',
  template: Handlebars.templates.app,
  events: {
    'click p > a': 'reset',
    'click th': 'sort',
    'submit': 'submitForm'
  },
  initialize() {
    this.render();
    this.itemsView = new ItemsView();
    this.listenTo(this.collection, 'reset', function(collection) {
      this.itemsView.render(collection);
    });
    this.listenTo(this.collection, 'sort', function(collection) {
      this.itemsView.render(collection);
    });
  },
  render() {
    this.$el.html(this.template());
    $(document.body).prepend(this.$el);
  },
  reset(e) {
    e.preventDefault();
    this.collection.reset();
  },
  sort(e) {
    let prop = e.currentTarget.dataset.prop;
    this.trigger('sort', prop);
  },
  submitForm(e) {
    e.preventDefault();
    this.trigger('createItem', this.$('form').serializeArray());
  }
});

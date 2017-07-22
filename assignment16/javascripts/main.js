Handlebars.registerPartial('item', Handlebars.templates.item);
let app = Object.create(App);
app.init();
Handlebars.registerPartial('item', $('#item').remove().html());

let Item = Backbone.Model.extend({
  idAttribute: 'id',
  initialize() {
    this.collection.incrementID();
    this.set('id', this.collection.lastID);
  }
});

let Items = Backbone.Collection.extend({
  model: Item,
  lastID: 0,
  comparator: 'name',
  incrementID() {
    this.lastID++;
  },
  updateComparator(prop) {
    this.comparator = prop;
    this.sort();
  },
});

let ItemsView = Backbone.View.extend({
  el: 'tbody',
  template: Handlebars.compile($('#items').remove().html()),
  events: {
    'click a': 'remove'
  },
  initialize() {
    this.listenTo(this.collection, 'reset sort remove', this.render);
  },
  render() {
    this.$el.html(this.template({items: this.collection.toJSON()}));
  },
  remove(e) {
    e.preventDefault();
    this.collection.remove(e.currentTarget.dataset.id)
  },
});

let AppView = Backbone.View.extend({
  el: 'main',
  events: {
    'click p > a': 'clear',
    'click th': 'sortByProp',
    'submit': 'addItem'
  },
  initialize() {
    this.view = new ItemsView({collection: new Items()});
    this.view.collection.reset(items_json);
  },
  sortByProp(e) {
    this.view.collection.updateComparator(e.currentTarget.dataset.prop);
  },
  clear(e) {
    e.preventDefault();
    this.view.collection.reset();
  },
  addItem(e) {
    e.preventDefault();
    let attribs = _($('form').serializeArray()).chain().toArray()
                   .reduce((result, attr) => {
                      result[attr.name] = attr.value;
                      return result;
                   }, {}).value();
    e.target.reset();
    this.view.collection.add(attribs);
  }
});

let app = new AppView;


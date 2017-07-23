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
  initialize() {
    this.on('add remove sort reset', App.render, app);
  },
  incrementID() {
    this.lastID++;
  },
  updateComparator(prop) {
    this.comparator = prop;
    this.sort();
  },
});

let App = {
  template: Handlebars.compile($('#items').remove().html()),
  $body: $('tbody'),
  init() {
    this.collection = new Items(items_json);
    this.bind();
    this.render();
  },
  render() {
    this.$body.html(this.template({items: this.collection.models}));
  },
  remove(e) {
    e.preventDefault();
    this.collection.remove(e.currentTarget.dataset.id)
  },
  sort(e) {
    this.collection.updateComparator(e.currentTarget.dataset.prop);
  },
  bind() {
    this.$body.on('click', 'a', this.remove.bind(this));
    $('main').on('click', 'p > a', this.collection.reset.bind(this.collection));
    $('th').on('click', this.sort.bind(this));
    $('form').on('submit', e => {
      e.preventDefault();
      let attribs = _($('form').serializeArray()).chain().toArray()
                     .reduce((result, attr) => {
                        result[attr.name] = attr.value;
                        return result;
                     }, {}).value();
      e.currentTarget.reset();
      this.collection.add(attribs);
    });
  }
}


let app = Object.create(App);
app.init();



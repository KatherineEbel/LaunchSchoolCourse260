ilet template = Handlebars.compile($('#items').remove().html());
Handlebars.registerPartial('item', $('#item').remove().html());

let Collection = {
  create(attribs) {
    attribs.id = this.collection.length + 1;
    let item = new Item(attribs);
    this.collection.push(item);
    return item;
  },
  sortBy(prop) {
    this.collection = _(this.collection).sortBy(item => item.get(prop));
    this.render();
  },
  remove(e) {
    e.preventDefault();
    let id = +e.currentTarget.dataset.id;
    this.collection = _.reject(this.collection, item => item.get('id') === id);
    this.render();
  },
  clear() {
    this.collection.length = 0;
    this.render();
  },
  render() {
    $('tbody').html(template({items: this.collection}));
  },
  init() {
    _(items_json).each(this.create.bind(this));
    this.sortBy('name');
    this.bind();
  },
  bind() {
    $('tbody').on('click', 'a', this.remove.bind(this));
    $('main').on('click', 'p > a', this.clear.bind(this));
    $('th').on('click', e => this.sortBy(e.currentTarget.dataset.prop));
  }
};

let Item = Backbone.Model.extend({
  idAttribute: 'id'
});
let Items = Object.create(Collection);
Items.collection = [];
Items.init();

$('form').on('submit', function(e) {
  e.preventDefault();
  let attribs = _($('form').serializeArray()).chain().toArray()
                 .reduce((result, attr) => {
                    result[attr.name] = attr.value;
                    return result;
                 }, {}).value();
  this.reset();
  $('tbody').append(Handlebars.partials.item(Items.create(attribs).toJSON()));
});

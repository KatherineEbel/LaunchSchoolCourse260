let templates = _.reduce(_.toArray($("[type='text/x-handlebars']")), (result, nextVal) => {
  result[$(nextVal).attr('id')] = Handlebars.compile($(nextVal).remove().html());
  return result;
}, {});
let formatDatetime = (date) => moment(date).format();
let formatDate = (date) => date.format('MMMM Do YYYY HH:mm:ss');
let ProductModel = Backbone.Model.extend({
  defaults: product_json,
  initialize: function() {
    this.setDatetime();
    this.setDateFormatted();
  },
  update: function(e) {
    e.preventDefault();
    let props = _.reduce($('form').serializeArray(), function(props, nextVal) {
      props[nextVal.name] = nextVal.value;
      return props;
    }, {});
    this.set(props);
    this.set('date', new Date().valueOf());
    this.setDatetime();
    this.setDateFormatted();
    this.render();
  },
  setDatetime() {
    let datetime = moment(new Date(this.get('date')));
    this.set('datetime', datetime.format());
  },
  setDateFormatted() {
    let datetime = moment(new Date(this.get('date')));
    this.set('date_formatted', datetime.format('MMMM Do YYYY HH:mm:ss'));
  },
  render: function() {
    $('article').html(templates.product(this.toJSON()));
    $('form fieldset').html(templates.form(this.toJSON()));
  }
});

let product = new ProductModel;
product.render();
$(document).on('submit', product.update.bind(product));



